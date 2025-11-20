@echo off
REM GretTech Sanity Data Import Script for Windows
REM This script imports all NDJSON data files into your Sanity dataset

setlocal enabledelayedexpansion

REM Default dataset name
set DATASET=%1
if "%DATASET%"=="" set DATASET=production

echo.
echo ╔════════════════════════════════════════════════════╗
echo ║   GretTech Sanity Data Import Script              ║
echo ╚════════════════════════════════════════════════════╝
echo.

REM Check if sanity CLI is installed
where sanity >nul 2>nul
if errorlevel 1 (
    echo [ERROR] Sanity CLI is not installed.
    echo Please install it with: npm install -g @sanity/cli
    exit /b 1
)

REM Check if we're in the Data directory
if not exist "company.ndjson" (
    echo [WARNING] Not in the Data directory. Attempting to navigate...
    if exist "Data" (
        cd Data
        echo [SUCCESS] Found Data directory
    ) else (
        echo [ERROR] Cannot find Data directory with .ndjson files
        exit /b 1
    )
)

echo Dataset: %DATASET%
echo Import Mode: Replace existing documents
echo.

REM Confirm before proceeding
set /p CONFIRM="Continue with import? This will replace existing documents. [y/N]: "
if /i not "%CONFIRM%"=="y" (
    echo Import cancelled.
    exit /b 0
)

echo.
echo Starting import...
echo.

REM Import files in order (dependencies first)
set FILES=icon.ndjson company.ndjson hero.ndjson contact.ndjson social.ndjson servicesSection.ndjson about.ndjson processStep.ndjson project.ndjson testimonial.ndjson

set COUNT=0
for %%F in (%FILES%) do (
    set /a COUNT+=1
    if exist "%%F" (
        echo [!COUNT!/10] Importing %%F...
        call sanity dataset import "%%F" "%DATASET%" --replace
        if errorlevel 1 (
            echo [ERROR] Failed to import %%F
            exit /b 1
        )
        echo [SUCCESS] Successfully imported %%F
        echo.
    ) else (
        echo [WARNING] %%F not found, skipping...
        echo.
    )
)

echo.
echo ╔════════════════════════════════════════════════════╗
echo ║   ✓ Import Complete!                              ║
echo ╚════════════════════════════════════════════════════╝
echo.
echo Next steps:
echo   1. Visit your Sanity Studio at http://localhost:3000/studio
echo   2. Upload images for projects, testimonials, and process steps
echo   3. Customize the content with your actual information
echo   4. Test your frontend application
echo.
echo Happy building! 🚀

