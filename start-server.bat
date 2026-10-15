@echo off
title QuickToolHub Local Web Server
echo Starting QuickToolHub server...
powershell -ExecutionPolicy Bypass -File "%~dp0server.ps1"
pause
