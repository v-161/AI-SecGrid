# AI-SecGrid

**AI-SecGrid** is a React-based cybersecurity simulation dashboard for **Critical Infrastructure (CI)**.
It visualizes multiple CI sectors on a city map, simulates threats in real-time, and demonstrates **AI-driven defense mechanisms**.

---

## **Features**

* **Interactive Map:**
  Each critical infrastructure sector (Chemical, Energy, Transportation, etc.) is marked on a city map. Click to view status.

* **Threat Simulation:**

  * Real-time intrusion detection (simulated IPs).
  * Single or multiple attacks occur randomly every 10–15 seconds.
  * Threats are visually marked in red; secure sectors in green.
  * AI-style heuristic defense automatically mitigates threats after detection.

* **System Logs:**
  A console panel logs all security events with timestamps, showing detection and mitigation events.

* **Report Generation:**
  Download system activity and threat reports, showing real-time date-time for each threat.

* **Splash Screen:**
  Full-page loading GIF before the dashboard loads.

* **Simple UI/UX:**
  Simple interface with black and green theme, minimalistic design, and red for threat markers.

---

## **Concept of AI**

Although a simulation, AI-inspired concepts are included:

* **Heuristic Defense:** Threats are detected and mitigated automatically, mimicking AI-based monitoring.
* **Randomized Threat Patterns:** Multiple attacks simulate unpredictable behavior in real networks.
* **Real-time Response:** Instant updates on threat status, simulating AI-driven decision-making.

---

## **Installation & Run**

Clone the repository:

```bash
git clone https://github.com/<your-username>/AI-SecGrid.git
cd AI-SecGrid
```

Install dependencies:

```bash
npm install
```

Run the app:

```bash
npm run dev
```

Open the browser at `http://localhost:5173/`.

---

## **Folder Structure**

```bash
AI-SecGrid/
├─ public/
│  └─ index.html
├─ src/
│  ├─ assets/
│  │  ├─ citymap.jpg
│  │  ├─ loading.gif
│  │  └─ sectors/            # optional sector-specific assets
│  ├─ components/
│  │  └─ Header.jsx
│  ├─ pages/
│  │  ├─ Chemical.jsx
│  │  ├─ Commercial.jsx
│  │  ├─ Communications.jsx
│  │  ├─ CriticalManufacturing.jsx
│  │  ├─ Dams.jsx
│  │  ├─ Defense.jsx
│  │  ├─ Emergency.jsx
│  │  ├─ Energy.jsx
│  │  ├─ Financial.jsx
│  │  ├─ FoodAgriculture.jsx
│  │  ├─ Government.jsx
│  │  ├─ Healthcare.jsx
│  │  ├─ IT.jsx
│  │  ├─ Nuclear.jsx
│  │  ├─ Transportation.jsx
│  │  ├─ Water.jsx
│  │  └─ SectorTemplate.jsx   # reusable template for future sectors
│  ├─ utils/
│  │  ├─ threatSimulator.js
│  │  └─ reportGenerator.js
│  ├─ App.jsx
│  └─ index.css
├─ package.json
└─ README.md
```
