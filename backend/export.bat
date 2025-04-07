@echo off
set DB=data\survey.db
set TABLE=%1
SET OUTPUT= ..\exports\%TABLE%.csv

:: Launches SQLite CLI and opens your database.
sqlite3.exe %DB% ^
:: Tells SQLite to include column headers in the output.
.headers on ^
:: Sets the output format to CSV.
.mode csv ^
:: Redirects output to your CSV file.
.output %OUTPUT% ^
:: Runs a SQL query to get all rows from the table
SELECT * FROM %TABLE%;
echo Exported %TABLE% to %OUTPUT%
pause