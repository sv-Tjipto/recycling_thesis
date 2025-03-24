@echo off
echo Starting server...
SET PATH=%~dp0node;%PATH%
cd %~dp0app
@REM 

REM Start server in a new terminal window so it doesn't block the rest
start "" cmd /k "node server.js"

REM Wait 2 seconds for server to boot
timeout /t 2 >nul

echo Starting server on Default Browser 
start http://localhost:3000
exit
pause