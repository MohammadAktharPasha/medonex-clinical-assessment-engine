# Medonex Clinical Assessment & Anti-Cheat Engine (Windows Native)

A complete, 100% free open-source recruitment assessment and proctoring web application built for Windows, tailored directly to the real **Novant Health Med-Surg / Telemetry Requisition (# 26-28700)** extracted from the Medonex candidate portal.

## Core Capabilities Grounded in Novant Health #26-28700

1. **Requisition Spec Ingestion (`/`)**:
   - Ingests the 24-bed Telemetry overflow profile, 1:6 patient ratios, 1:12 CNA delegation, Epic EMR, Pyxis dispensing, and mandatory EKG pre-test requirement.
2. **Dynamic AI Question Generation in Moodle GIFT Format**:
   - Generates scenario-based clinical questions directly matching Novant's remote telemetry alert and CNA delegation protocols.
3. **MedTrainer-Parity Compliance & Policy Attestation**:
   - Free Moodle `mod_customcert` generating tamper-proof PDF certificates for HIPAA/OSHA + digital attestation of Novant unit policies (sister-unit floating, Navy Blue scrubs, RTO prohibition / DNR penalty).
4. **Timed Exam Assembly (`mod_quiz`)**:
   - Strict 30-minute server countdown, dynamic random pool draw, and 1-per-page pagination on Windows.
5. **Multi-Layer Zero-Cost Anti-Cheat Engine (`/simulator`)**:
   - Windows Safe Exam Browser kiosk lockdown (blocks Alt+Tab, dual monitors, background apps) + `quizaccess_proctoring` (30s photo captures + `window.onblur`) + Google MediaPipe Face Mesh WASM ($0 GPU cost).
6. **1-Click Novant Health Verification Dossier (`/dossier`)**:
   - High-fidelity printable 2-page PDF Dossier ready for Fieldglass/MSP candidate submittals.
7. **Windows Administrator Setup Playbook (`/windows-guide`)**:
   - Step-by-step instructions for running Moodle on Windows 10/11 using the official Moodle Windows package (`C:\MoodleServer\Start Moodle.exe`).

## Running on Windows

1. Open PowerShell or Command Prompt.
2. Navigate to this folder:
   ```powershell
   cd "C:\Users\Akthar Pasha\.gemini\antigravity\scratch\medonex-clinical-assessment-engine"
   ```
3. Install dependencies:
   ```powershell
   pip install -r requirements.txt
   ```
4. Start the application:
   ```powershell
   python app.py
   ```
   *(Or simply double-click `run.bat`)*

5. Open your web browser at:
   ```
   http://localhost:5003
   ```
