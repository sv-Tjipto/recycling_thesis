const express = require("express");
const fs = require("fs");
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");
const open = require("open");
const db = require("./db"); // Calls the Database
const cookieParser = require("cookie-parser"); // Cookie reader Backend



const app = express();
app.use(cors());
app.use(bodyParser.json());  // Ensures JSON data is parsed
app.use(cookieParser()); // Ensures the Cookie is parsed

  

// Serve frontend files from "frontend" folder
app.use(express.static(path.join(__dirname, "..", "frontend")));

// Serve images from /assets/stimuli/
app.use("/assets/stimuli", express.static(path.join(__dirname, "..", "frontend", "assets", "stimuli")));



// Default route to serve index.html
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "frontend", "index.html"));
});

// Serve pages dynamically
app.get("/pages/:page", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "frontend", "pages", req.params.page));
});


// Store participant details and assign a unique ID
app.post("/submit-form", (_req, res) => {
    try {
        
        //Fix: Check if participant ID exists in cookies
        // let participantID = req.cookies?.participantID || "P" + Math.floor(Math.random() * 100000);
        let participantID = "P" + Math.floor(Math.random() * 100000);


        //Fix: Set participant ID in cookie for future use
        res.cookie("participantID", participantID, { maxAge: 7 * 24 * 60 * 60 * 1000, httpOnly: false });

        // Generate Timestamp
        let timestamp = new Date().toISOString(); // e.g., "2024-03-19T14:30:00.000Z"


        // SQL ----------------------------------------------------------------

        const sql = `
        INSERT INTO particulars_start(
        participant_id,
        timestamp
        ) VALUES (?, ?)
        `;

        db.run(sql, [
            participantID,
            timestamp
        ], (err) => {
            if (err) {
                console.error("Error saving to DB:", err);
                return res.status(500).json({ error: "Failed to save initial details."});
            }

            console.log(`Saved initial details for ${participantID} at ${timestamp} into Database`);
            res.json({ redirectUrl: "/pages/consent.html", participantID });
        });
        // ------------------------------------------------------------------

    } catch (error) {
        console.error("Server error:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

// Resets participantID
app.get("/reset", (req, res) => {
    res.clearCookie("participantID");
    res.redirect("/"); // or wherever your start page is
});

app.post("/submit-consent", (req, res) => {
    console.log("Incoming JSON:", req.body); // Log the incoming JSON
    const { consent } = req.body;
    const participantID = req.cookies.participantID;

    if (!participantID || !consent) {d
        console.error("Missing consent on Backend.");
        return res.status(400).json({ error: "Missing consent on Backend."});
    }
    
    const sql = `UPDATE particulars_start SET consent = ? WHERE participant_id = ?`;

    db.run(sql, [consent, participantID], (err) => {
        if (err) {
          console.error("Consent update failed:", err);
          return res.status(500).json({ error: "Database error." });
        }
        res.json({ message: "Consent recorded." });
      });


});


app.post("/save-sorting", (req, res) => {
    console.log("Incoming JSON:", req.body); // Log the incoming JSON

    const { participantID, item, item_id, round,selectedBin, correct, timeTaken, orderIndex } = req.body;

    if (!participantID || !item || !item_id || !round || !selectedBin || !correct || !timeTaken || !orderIndex) {
                console.error("Missing sorting task data.");
                return res.status(400).json({ error: "Missing sorting task data." });
            }
    
    
    console.log("Lols balls")
    if (!req.body || typeof req.body !== "object") {
        return res.status(400).json({ error: "Invalid JSON format." });
    }

    // SQL -------------------------------------------------------------------

    const sql = `
    INSERT INTO dustbin_picks (participant_id, item, item_id, round, correct, time_taken, item_order, timestamp)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    ON CONFLICT(participant_id, item_id, round) DO UPDATE SET
        correct = excluded.correct,
        time_taken = excluded.time_taken,
        item_order = excluded.item_order,
        timestamp = excluded.timestamp
    `;
    const timestamp = new Date().toISOString();
    
    db.run(sql, [participantID, item, item_id, round, correct, timeTaken, orderIndex, timestamp], (err) => {
        if (err) {
          console.error("Error saving/updating:", err);
          return res.status(500).json({ error: "Failed to update participant data" });
        } else {
          console.log("Saved or updated successfully.");
          return res.status(200).json({ message: `Data updated for ${participantID}` });
        }
      });

});


app.post("/submit-survey", (req, res) =>{
    try{
        const participantID = req.cookies?.participantID || null; // fallback
        const timestamp = new Date().toISOString();
        const {
            gender, age, housing, binAccess, knowledge, frequency,
            recyclingActions, confidenceLevels, recyclingConcerns,
            trustScale, motivation, sustainabilityHabits
        } = req.body;


        if (!participantID) {
            return res.status(400).json({ error: "Missing participant ID for Questions table." });
          }


          const sql = `
          INSERT INTO survey_responses (
            participant_id, timestamp, gender, age, housing, bin_access,
            knowledge, frequency, recycling_actions,
            confidence_plastic, confidence_glass, confidence_metal,
            confidence_soft_plastic, confidence_e_waste,
            recycling_concerns, trust_scale, motivations, sustainability_habits
          ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
           ON CONFLICT(participant_id) DO UPDATE SET
            timestamp = excluded.timestamp,
            gender = excluded.gender,
            age = excluded.age,
            housing = excluded.housing,
            bin_access = excluded.bin_access,
            knowledge = excluded.knowledge,
            frequency = excluded.frequency,
            recycling_actions = excluded.recycling_actions,
            confidence_plastic = excluded.confidence_plastic,
            confidence_glass = excluded.confidence_glass,
            confidence_metal = excluded.confidence_metal,
            confidence_soft_plastic = excluded.confidence_soft_plastic,
            confidence_e_waste = excluded.confidence_e_waste,
            recycling_concerns = excluded.recycling_concerns,
            trust_scale = excluded.trust_scale,
            motivations = excluded.motivations,
            sustainability_habits = excluded.sustainability_habits
        `;
        db.run(sql, [
            participantID,
            timestamp,
            gender,
            age,
            housing,
            binAccess.join("; "),
            knowledge,
            frequency,
            recyclingActions.join("; "),
            confidenceLevels.plastic,
            confidenceLevels.glass,
            confidenceLevels.metal,
            confidenceLevels.softPlastic,
            confidenceLevels.eWaste,
            recyclingConcerns.join("; "),
            trustScale,
            motivation.join("; "),
            sustainabilityHabits.join("; ")
          ], (err) => {
            if (err) {
              console.error("Error inserting survey response:", err);
              return res.status(500).json({ error: "Failed to save survey." });
            }
            console.log(`Survey stored for participant ${participantID}`);
            res.json({ message: "Survey saved successfully!" });
          });
        } catch (error) {
            console.error("Survey route error:", error);
            res.status(500).json({ error: "Server error saving survey." });
        }

    
});


// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);


});
