@echo off
echo Starting server...
SET PATH=%~dp0node;%PATH%
cd %~dp0app
node server.js
pause