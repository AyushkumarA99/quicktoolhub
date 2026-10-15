@echo off
set PATH=%PATH%;C:\Program Files\Git\cmd;C:\Program Files\Git\bin
cd /d "%~dp0"

echo ==========================================================
echo   QuickToolHub - Push to GitHub
echo   Repository: https://github.com/AyushkumarA99/quicktoolhub.git
echo ==========================================================
echo.

echo 1. Initializing Git...
git init

echo.
echo 2. Adding all project files...
git add .

echo.
echo 3. Creating Initial Commit...
git commit -m "Initial commit: Complete QuickToolHub production website with 10 tools, SEO, and AdSense readiness"

echo.
echo 4. Renaming branch to main...
git branch -M main

echo.
echo 5. Setting remote origin...
git remote remove origin 2>nul
git remote add origin https://github.com/AyushkumarA99/quicktoolhub.git

echo.
echo 6. Pushing to GitHub (main branch)...
git push -u origin main

echo.
if %errorlevel% equ 0 (
    echo ==========================================================
    echo   SUCCESS: Code successfully pushed to GitHub!
    echo   View online: https://github.com/AyushkumarA99/quicktoolhub
    echo ==========================================================
) else (
    echo.
    echo If push failed due to remote containing existing files (e.g. README/License),
    echo running force push...
    git push -u origin main --force
)

echo.
pause
