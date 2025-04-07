# Recycling Thesis

This is a fullstack project in collaboration with my friend's thesis.
This project also lets me explore on Backend(Server side) function like Node.js.


## Project Structure

```
recycling_thesis/
├── backend/
│   ├── server.js
│   ├── db.js
│   ├── data/
│   │   └── survey.db
│   ├── export.bat
│   ├── exportAll.bat
|   ├── start.bat
├── frontend/
|   ├── pages/
|   |   ├── consent.html
|   |   ├── questions.html
|   │   ├── sortingTask.html
|   │   └── thankyou.html
│   ├── index.html
│   ├── js/
│   │   └── scripter.js
│   ├── assets/
|   │   ├── bins/
|   │   ├── form/
|   │   ├── stimuli/
|   │   └── theme/
|   ├── css/
|   │   └── style.css
├── exports/
|    └── *.csv
├── update.bat
```

## Features 

- Participants ID generation & cookie tracking
- Consent & demographics survey
- Sorting task to test recycling knowledge
- Saves all data to SQLite database
- Export database tables to CSV via `.bat` script

## Running Locally

1.  Navigate to backend folder:
```
cd backend
```
 2. Run start.bat
 ```
start.bat
 ```
Server will run at: `http://localhost:3000`

## Exporting Database

To export data from SQLite database to CSV:
1. Ensure `sqlite.exe` is in the backend folder.
```
errorSolver.bat
```
Run `errorSolver.bat` in backend if there is build issue with SQLite.

2. Run batch file in backend folder:
```
exportAll.bat
```
All CSVs will be saved into `/exports/*`

## Database Table

- `particulars_start` – participant ID and timestamp and consent

- `survey_responses` – participant demographics and survey answers

- `dustbin_picks` – sorting task results

## Technologies Used

- Node.js + Express
- SQLite3
- Vanilla JavaScript
- HTML/CSS

## Notes

- Cookies are used to track participants
- Data os de-identified
- You can safely reset cookies for testing

## Improvements

- Add admin dashboard to review results
- Containerize it for portability

