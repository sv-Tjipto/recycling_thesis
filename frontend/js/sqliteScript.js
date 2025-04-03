// db.js
const sqlite3 = require("sqlite3").verbose(); // Imports sqlite library
const db = new sqlite3.Database("./data/survey.db"); // creates or opens SQLite db

db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS survey (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    participant_id TEXT,
    timestamp TEXT,
    gender TEXT,
    age INTEGER,
    housing TEXT,
    bins TEXT,
    knowledge INTEGER,
    frequency INTEGER
  )`);
});

module.exports = db; // Makes the db object available to other files eg. server.js
