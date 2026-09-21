# UNIGUARD Smart Parking Solution — Command Center Mockup

Status: 🚧 Active Development Phase (still a mockup)

Simulated real-time telemetry, modular OOP data architecture, and responsive dark-mode command center UI.

# Overview

UNIGUARD is a smart parking and vehicle access control command center dashboard mockup combining:

DDS (Dynamic Guidance / Parking Slot Availability): Digital signage totem replicas and live floor-by-floor sensor grid visualization (Basement - Lantai 3).

TDS (Traffic/Access Data System): ANPR-powered live access logs, plate-number tracking badges, and multi-gate status telemetry (Normal, Closed, Maintenance).

# Tech Stack & Architecture

Frontend: React (Create React App), Tailwind CSS v3 (@apply modular architectural layers)

Icons: lucide-react

Data Layer: Object-Oriented Programming (OOP) via UniguardDataService (simulated real-time interval telemetry)

Containerization: Docker / Docker Compose

# Modular Project Structure

```bash
src/
├── asset/
│   └──                           // Still empty                 
├── components/
│   ├── common/                  // Reusable UI pieces
│   │   ├── StatCard.jsx
│   │   └── StatusBadge.jsx
│   ├── layout/                  // Page layout parts
│   │   ├── Header.jsx
│   │   ├── Sidebar.jsx
│   │   └── DashboardLayout.jsx
│   └── views/                   // The main dashboard pages
│       ├── DdsDashboard.jsx
│       ├── TdsDashboard.jsx
│       ├── PengaturanDashoard.jsx
|       └── LaporanDashboard.jsx
|
├── config/
│   └── constants.jsx            //  Put API URLs or static config here
├── contexts/
│   └── UniguardContext.jsx      //  If you want to use React Context later
├── hooks/
│   └── useUniguardData.jsx       //  Custom hook for data fetching
├── services/
│   └── UniguardDataService.jsx   // The Object-Oriented class for data
├── styles/
│   └── custom-styles.css        // Any extra CSS outside of Tailwind
├── utils/
│   └── formatters.jsx            // Helper functions for date/time formatting
├── App.jsx                       // Main entry point holding the state
├── App.css
├── index.jsx
└── index.css                    // Put your Tailwind @tailwind directives here
```

# Local Developement

## Option A: Local Node / CRA

```bash
npm install
npm start
```

## Option B: Docker Environment

```bash
docker compose up -d
```