// db.js
const sqlite3 = require("sqlite3").verbose(); // Imports sqlite library
const db = new sqlite3.Database("./data/survey.db", (err) => {
  if(!err) {
    db.run("PRAGMA foreign_keys = ON");
  }
}); // creates or opens SQLite db




db.serialize(() => {
  // consent -- 1 for true, 0 for false
  db.run(`CREATE TABLE IF NOT EXISTS particulars_start (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    participant_id TEXT UNIQUE,
    consent INTEGER,
    timestamp TEXT
  )`);

  // Table to store sorting task results
  db.run(`CREATE TABLE IF NOT EXISTS dustbin_picks (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    participant_id TEXT,
    item TEXT,
    item_id INTEGER,
    correct TEXT,
    time_taken REAL,
    item_order INTEGER,
    round INTEGER,
    timestamp TEXT,
    FOREIGN KEY (participant_id) REFERENCES particulars_start(participant_id)
    )`);

  // Ensure uniqueness of participant_id + item combo
  db.run(`
    CREATE UNIQUE INDEX IF NOT EXISTS idx_participant_item
    ON dustbin_picks(participant_id, item_id, round)
  `);
  

  // db.run(`CREATE TABLE IF NOT EXISTS question_results (
  //   id INTEGER PRIMARY KEY AUTOINCREMENT,
  //   participant_id TEXT,
  //   )`);

  
// Create survey responses table

  db.run(`CREATE TABLE IF NOT EXISTS survey_responses (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    participant_id TEXT UNIQUE,
    timestamp TEXT,
    gender TEXT,
    age INTEGER,
    housing TEXT,
    bin_access TEXT, -- stored as a CSV string
    knowledge INTEGER,
    frequency INTEGER,
    recycling_actions TEXT, -- stored as CSV
    confidence_plastic INTEGER,
    confidence_glass INTEGER,
    confidence_metal INTEGER,
    confidence_soft_plastic INTEGER,
    confidence_e_waste INTEGER,
    recycling_concerns TEXT,
    trust_scale INTEGER,
    motivations TEXT,
    sustainability_habits TEXT,
    FOREIGN KEY (participant_id) REFERENCES particulars_start(participant_id)
  )`);
  
});




module.exports = db; // Makes the db object available to other files eg. server.js
