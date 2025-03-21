const express = require("express");
const fs = require("fs");
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");
const open = require("open");

const app = express();
app.use(cors());
app.use(bodyParser.json());  // Ensures JSON data is parsed


const ROOT_FOLDER = path.join(__dirname, "..");  // Go to the root directory
const CSV_FOLDER = path.join(ROOT_FOLDER, "saved_data");  // Saved in root/saved_data
const CSV_FILE = path.join(CSV_FOLDER, "survey_data.csv");


// Ensure the folder exists
if (!fs.existsSync(CSV_FOLDER)) {
    fs.mkdirSync(CSV_FOLDER, { recursive: true });
}

// Ensure CSV file exists with headers
if (!fs.existsSync(CSV_FILE)) {
    fs.writeFileSync(CSV_FILE, "Participant ID,Name,Knowledge,Frequency\n");
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
        const { name, knowledge, frequency } = req.body;

        if (!name || !knowledge || !frequency) {
            return res.status(400).json({ error: "All fields are required." });
        }

        //Fix: Check if participant ID exists in cookies
        let participantID = req.cookies?.participantID || "P" + Math.floor(Math.random() * 100000);

        //Fix: Set participant ID in cookie for future use
        res.cookie("participantID", participantID, { maxAge: 7 * 24 * 60 * 60 * 1000, httpOnly: false });

        // Generate Timestamp
        let timestamp = new Date().toISOString(); // e.g., "2024-03-19T14:30:00.000Z"

        const newData = `${participantID},${timestamp},${name},${knowledge},${frequency}\n`;

        fs.appendFile(CSV_FILE, newData, err => {
            if (err) {
                console.error("Error writing to CSV:", err);
                return res.status(500).json({ error: "Failed to save participant data" });
            }
            console.log(`Participant ${participantID} saved at ${timestamp}`);
            res.json({ redirectUrl: "/pages/sortingTask.html", participantID });
        });

    } catch (error) {
        console.error("Server error:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});


app.post("/save-sorting", (req, res) => {
    console.log("Incoming JSON:", req.body); // Log the incoming JSON

    const { participantID, item, selectedBin, correct, timeTaken } = req.body;

    if (!participantID || !item || !selectedBin || !correct || !timeTaken) {
                console.error("Missing sorting task data.");
                return res.status(400).json({ error: "Missing sorting task data." });
            }
        
    console.log("Lols balls")
    if (!req.body || typeof req.body !== "object") {
        return res.status(400).json({ error: "Invalid JSON format." });
    }

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

// app.post("/save-sorting", (req, res) => {
//     console.log("Incoming request to /save-sorting"); // Debugging Log

//     const { participantID, item, selectedBin, correct, timeTaken } = req.body;

//     if (!participantID || !item || !selectedBin || !correct || !timeTaken) {
//         console.error("Missing sorting task data.");
//         return res.status(400).json({ error: "Missing sorting task data." });
//     }

//     fs.readFile(CSV_FILE, "utf8", (err, data) => {
//         if (err) {
//             console.error("Error reading CSV:", err);
//             return res.status(500).json({ error: "Failed to read data" });
//         }

//         let rows = data.split("\n").map(row => row.split(","));
//         let participantIndex = rows.findIndex(row => row[0] === participantID);

//         if (participantIndex === -1) {
//             console.error(`Participant ID ${participantID} not found.`);
//             return res.status(404).json({ error: "Participant not found." });
//         }

//         rows[participantIndex].push(item, selectedBin, correct, timeTaken);

//         let updatedCSV = rows.map(row => row.join(",")).join("\n");

//         fs.writeFile(CSV_FILE, updatedCSV, (err) => {
//             if (err) {
//                 console.error("Error updating CSV:", err);
//                 return res.status(500).json({ error: "Failed to update participant data" });
//             }
//             console.log(`Sorting task data saved for Participant ${participantID}!`);
//             res.status(200).json({ message: `Data updated for ${participantID}` });
//         });
//     });
// });




// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);


});
