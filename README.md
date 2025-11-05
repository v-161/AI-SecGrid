# AI-SecGrid

**AI-SecGrid** is a React-based cybersecurity simulation dashboard for **Critical Infrastructure (CI)**.  
It visualizes multiple CI sectors on a city map, simulates threats in real-time, and demonstrates **AI-driven defense mechanisms**.

---

## **Features**

- **Interactive Map:**  
  Each critical infrastructure sector (Chemical, Energy, Transportation, etc.) is marked on a city map. Click to view status.

- **Threat Simulation:**  
  - Real-time intrusion detection (simulated IPs).  
  - Single or multiple attacks can occur randomly every 15–30 seconds.  
  - Threats are visually marked in red; secure sectors in green.  
  - AI-style heuristic defense automatically mitigates threats after detection.

- **System Logs:**  
  A console panel logs all security events with timestamps, showing detection and mitigation events.

- **Splash Screen:**  
  Full-page loading GIF before the dashboard loads.

- **Simple UI/UX:**  
  Sci-fi hacker-style interface with black and white theme, minimalistic design, and red for threat markers.

---

## **Concept of AI**

While this is a simulation, it incorporates **AI-inspired concepts**:

- **Heuristic Defense:** Threats are detected and mitigated automatically, mimicking AI-based monitoring.  
- **Randomized Threat Patterns:** Multiple attacks simulate unpredictable behavior in real networks.  
- **Real-time Response:** Instant updates on threat status, simulating AI-driven decision making.

---

## **Installation & Run**

```bash
//Clone the repository:

git clone https://github.com/<your-username>/AI-SecGrid.git
cd AI-SecGrid
Install dependencies:
```
```bash
//Copy code
npm install
```
```bash
//Run the app:
npm run dev
Open the browser at http://localhost:5173/.
//default
```
```bash
//Folder Structure

pgsql
Copy code
AI-SecGrid/
├─ public/
│  └─ index.html
├─ src/
│  ├─ assets/
│  │  ├─ citymap.jpg
│  │  └─ loading.gif
│  ├─ components/
│  ├─ data/
│  │  └─ subsectors.js
│  ├─ utils/
│  │  └─ threatSimulator.js
│  ├─ App.jsx
│  ├─ index.css
│  └─ main.jsx
|
├─ package.json
└─ README.md
```
