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

const ROOT_FOLDER = path.join(__dirname, "..");  // Go to the root directory
const CSV_FOLDER = path.join(ROOT_FOLDER, "saved_data");  // Saved in root/saved_data
const CSV_FILE = path.join(CSV_FOLDER, "survey_data.csv");


// Ensure the folder exists
if (!fs.existsSync(CSV_FOLDER)) {
    fs.mkdirSync(CSV_FOLDER, { recursive: true });
}

// // Ensure CSV file exists with headers
// if (!fs.existsSync(CSV_FILE)) {
//     fs.writeFileSync(CSV_FILE, "Participant ID,TimeStamp,Knowledge,Frequency\n");
// }

if (!fs.existsSync(CSV_FILE)) {
    const headers = [
      "Participant ID","Timestamp","Knowledge_Start","Frequency_Start", "Gender", "Age", "Housing", "Bin Access",
      "Knowledge", "Frequency", "Recycling Actions",
      "Confidence - Plastic", "Glass", "Metal", "Soft Plastic", "E-Waste",
      "Recycling Concerns", "Trust Scale", "Motivation", "Sustainable Habits"
    ];
    fs.writeFileSync(SURVEY_CSV, headers.join(",") + "\n");
}
  

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
app.post("/submit-form", (req, res) => {
    try {
        const {knowledge, frequency } = req.body;

        if (!knowledge || !frequency) {
            return res.status(400).json({ error: "All fields are required." });
        }

        //Fix: Check if participant ID exists in cookies
        let participantID = req.cookies?.participantID || "P" + Math.floor(Math.random() * 100000);

        //Fix: Set participant ID in cookie for future use
        res.cookie("participantID", participantID, { maxAge: 7 * 24 * 60 * 60 * 1000, httpOnly: false });

        // Generate Timestamp
        let timestamp = new Date().toISOString(); // e.g., "2024-03-19T14:30:00.000Z"

        const newData = `${participantID},${timestamp},${knowledge},${frequency}\n`;

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
        });
        // ------------------------------------------------------------------


        fs.appendFile(CSV_FILE, newData, err => {
            if (err) {
                console.error("Error writing to CSV:", err);
                return res.status(500).json({ error: "Failed to save participant data" });
            }
            console.log(`Participant ${participantID} saved at ${timestamp}`);
            res.json({ redirectUrl: "/pages/consent.html", participantID });
        });

    } catch (error) {
        console.error("Server error:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
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
        } else {
          console.log("Saved or updated successfully.");
        }
      });

    fs.readFile(CSV_FILE, "utf8", (err, data) => {
                if (err) {
                    console.error("Error reading CSV:", err);
                    return res.status(500).json({ error: "Failed to read data" });
                }
        
                let rows = data.split("\n").map(row => row.split(","));
                let headers = rows[0]; // First row is headers
                let participantIndex = rows.findIndex(row => row[0] === participantID);
        
                if (participantIndex === -1) {
                    console.error(`Participant ID ${participantID} not found.`);
                    return res.status(404).json({ error: "Participant not found." });
                }


                 //Ensure item columns exist
                let correctColumn = headers.indexOf(item);
                let timeColumn = headers.indexOf(item + "_time");

                if (correctColumn === -1) {
                    //If item columns do not exist, add them
                    headers.push(item, item + "_time");
                    correctColumn = headers.length - 2;
                    timeColumn = headers.length - 1;

                    // //Add empty values for all existing participants
                    // rows = rows.map(row => [...row, "", ""]);
                }
        
                // 🔹 Update participant's row with new values
                rows[participantIndex][correctColumn] = correct;
                rows[participantIndex][timeColumn] = timeTaken;

                let updatedCSV = rows.map(row => row.join(",")).join("\n");

                fs.writeFile(CSV_FILE, updatedCSV, (err) => {
                    if (err) {
                        console.error("Error updating CSV:", err);
                        return res.status(500).json({ error: "Failed to update participant data" });
                    }
                    console.log(`Sorting task data saved for Participant ${participantID}!`);
                    return res.status(200).json({ message: `Data updated for ${participantID}` });
                });
                

   
            });


    // res.status(200).json({ message: "Data recoreded successfully!" });
});


app.post("/submit-survey", (req, res) =>{
    try{
        const participantID = req.cookies?.participantID || "P" + Math.floor(Math.random() * 100000); // fallback
        const {
            gender, age, housing, binAccess, knowledge, frequency,
            recyclingActions, confidenceLevels, recyclingConcerns,
            trustScale, motivation, sustainabilityHabits
        } = req.body;

    // Format into one CSV line
    const row = [
        participantID,
        gender,
        age,
        `"${housing}"`,
        `"${binAccess.join("; ")}"`,
        knowledge,
        frequency,
        `"${recyclingActions.join("; ")}"`,
        confidenceLevels.plastic,
        confidenceLevels.glass,
        confidenceLevels.metal,
        confidenceLevels.softPlastic,
        confidenceLevels.eWaste,
        `"${recyclingConcerns.join("; ")}"`,
        trustScale,
        `"${motivation.join("; ")}"`,
        `"${sustainabilityHabits.join("; ")}"`
        ];
  
        // Append to file
        fs.appendFile(SURVEY_CSV, row.join(",") + "\n", (err) => {
        if (err) {
            console.error("Error writing survey:", err);
            return res.status(500).json({ error: "Failed to save survey." });
        }
        console.log(`Survey saved for ${participantID}`);
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
