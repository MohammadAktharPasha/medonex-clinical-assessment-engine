@echo off
title Push Medonex Clinical Engine to GitHub
echo ======================================================================
echo Pushing code to https://github.com/MohammadAktharPasha/medonex-clinical-assessment-engine
echo ======================================================================
cd /d "%~dp0"
"C:\Program Files\Git\cmd\git.exe" push -u origin main
echo.
echo ======================================================================
echo Done! Check your repo at:
echo https://github.com/MohammadAktharPasha/medonex-clinical-assessment-engine
echo ======================================================================
pause
