@echo off
echo Starting server...
SET PATH=%~dp0node;%PATH%
cd %~dp0app
node server.js

echo Starting server on Default Browser 
start https://localhost:3000

pause