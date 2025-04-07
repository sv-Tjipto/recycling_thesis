@echo off
REM Set your paths
set "DB=data\survey.db"
set "EXPORT_DIR=%~dp0..\exports"

REM Make sure export directory exists
if not exist "%EXPORT_DIR%" mkdir "%EXPORT_DIR%"

REM Create a temporary file to store table names
set "TABLE_LIST=%TEMP%\table_list.txt"

REM Extract table names into the temp file
sqlite3.exe "%DB%" "SELECT name FROM sqlite_master WHERE type='table';" > "%TABLE_LIST%"

REM Loop through each table name and export to CSV
for /f "usebackq delims=" %%T in ("%TABLE_LIST%") do (
    echo Exporting table: %%T
    sqlite3.exe "%DB%" ".headers on" ".mode csv" ".output \"%EXPORT_DIR%\%%T.csv\"" "SELECT * FROM %%T;"
)

REM Clean up
del "%TABLE_LIST%"
echo All tables exported to %EXPORT_DIR%!
pause
