@echo off
title QuickToolHub Local Web Server
cd /d "%~dp0"

echo ==========================================================
echo   QuickToolHub - Local Web Server
echo   Open in browser: http://localhost:3000/
echo ==========================================================
echo.

:: Open browser automatically after a short delay
start "" cmd /c "timeout /t 1 /nobreak >nul & start http://localhost:3000/"

:: Try Python server first (most reliable & handles all routes)
where python >nul 2>nul
if %errorlevel% equ 0 (
    echo [OK] Running via Python HTTP Server on port 3000...
    echo Press Ctrl+C to stop the server anytime.
    echo.
    python -m http.server 3000
    goto end
)

:: Fallback to PowerShell server
echo [INFO] Running via PowerShell HTTP Server...
powershell -NoProfile -ExecutionPolicy Bypass -File "%~dp0server.ps1" -Port 3000

:end
pause
