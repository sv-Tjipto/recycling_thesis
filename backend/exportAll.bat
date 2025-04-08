@echo off
REM Set your paths relative to script location
setlocal
cd /d %~dp0

REM Absolute path to the DB and export directory
set DB=data\survey.db
set EXPORT_DIR=..\exports

REM Make sure export directory exists
if not exist "%EXPORT_DIR%" mkdir "%EXPORT_DIR%"

REM Create a temporary file to store table names
set TABLE_LIST=table_list.txt

REM Extract table names
sqlite3.exe "%DB%" "SELECT name FROM sqlite_master WHERE type='table';" > "%TABLE_LIST%"

REM Loop through each table name and export
for /f "delims=" %%T in (%TABLE_LIST%) do (
    echo Exporting table: %%T
    sqlite3.exe "%DB%" ".headers on" ".mode csv" ".output %EXPORT_DIR%\%%T.csv" "SELECT * FROM %%T;"
)

REM Clean up
del "%TABLE_LIST%"
echo.
echo All tables exported to %EXPORT_DIR%!
pause
