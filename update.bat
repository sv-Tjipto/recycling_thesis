@echo off
cd /d %~dp0

echo Now running inside the folder: %cd%

REM Pull the latest code
echo Pulling latest update from GitHub...
git pull origin main

echo Danny Danny Danny 
pause