import { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import mapImage from "./assets/citymap.jpg";
import loadingGif from "./assets/loading.gif";
import { startThreatSimulation } from "./utils/threatSimulator";
import { generateReport } from "./utils/reportGenerator";

// Import all 16 sector pages
import Chemical from "./pages/Chemical";
import Commercial from "./pages/Commercial";
import Communications from "./pages/Communications";
import CriticalManufacturing from "./pages/CriticalManufacturing";
import Dams from "./pages/Dams";
import Defense from "./pages/Defense";
import Emergency from "./pages/Emergency";
import Energy from "./pages/Energy";
import Financial from "./pages/Financial";
import Food from "./pages/FoodAgriculture";
import Government from "./pages/Government";
import Healthcare from "./pages/Healthcare";
import IT from "./pages/IT";
import Nuclear from "./pages/Nuclear";
import Transportation from "./pages/Transportation";
import Water from "./pages/Water";

const initialSectors = [
  { id: 1, name: "Chemical", x: 12, y: 18, status: "secure" },
  { id: 2, name: "Commercial Facilities", x: 25, y: 35, status: "secure" },
  { id: 3, name: "Communications", x: 42, y: 12, status: "secure" },
  { id: 4, name: "Critical Manufacturing", x: 55, y: 40, status: "secure" },
  { id: 5, name: "Dams", x: 68, y: 22, status: "secure" },
  { id: 6, name: "Defense Industrial Base", x: 82, y: 30, status: "secure" },
  { id: 7, name: "Emergency Services", x: 15, y: 55, status: "secure" },
  { id: 8, name: "Energy", x: 35, y: 28, status: "secure" },
  { id: 9, name: "Financial Services", x: 50, y: 18, status: "secure" },
  { id: 10, name: "Food & Agriculture", x: 10, y: 70, status: "secure" },
  { id: 11, name: "Government Facilities", x: 65, y: 35, status: "secure" },
  { id: 12, name: "Healthcare & Public Health", x: 45, y: 75, status: "secure" },
  { id: 13, name: "Information Technology", x: 78, y: 18, status: "secure" },
  { id: 14, name: "Nuclear Reactors/Materials", x: 85, y: 50, status: "secure" },
  { id: 15, name: "Transportation", x: 58, y: 85, status: "secure" },
  { id: 16, name: "Water & Wastewater", x: 30, y: 88, status: "secure" },
];

// 🔹 Reusable Header for all pages
function Header({ logs }) {
  return (
    <div className="flex justify-between items-center px-6 py-3 border-b border-green-500 bg-[#0a0a0a]">
      <div className="flex items-center gap-6">
        <button
          onClick={() => (window.location.href = "/")}
          className="text-green-400 text-xl font-bold hover:text-green-300 transition"
        >
          AI-SecGrid
        </button>

        <div className="relative group">
          <button className="text-green-400 font-semibold hover:text-green-300 transition">
            Sectors ▾
          </button>
          <div className="absolute hidden group-hover:block bg-black border border-green-500 rounded-lg mt-1 z-50">
            {initialSectors.map((s) => (
              <Link
                key={s.id}
                to={`/${s.name.replace(/[\s&/]+/g, "")}`}
                className="block px-4 py-1 text-sm text-green-300 hover:bg-green-500 hover:text-black transition"
              >
                {s.name}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <button
        onClick={() => generateReport(logs || [])}
        className="px-3 py-1 rounded bg-green-500 hover:bg-green-600 text-black font-bold text-sm"
      >
        Generate Report
      </button>
    </div>
  );
}

// 🔹 Home Component
function Home() {
  const [loading, setLoading] = useState(false);
  const [sectors, setSectors] = useState(initialSectors);
  const [selected, setSelected] = useState(null);
  const [logs, setLogs] = useState([]);

  const addLog = (type, message) => {
    const now = new Date().toLocaleString();
    setLogs((prev) => [...prev.slice(-25), { type, message, time: now }]);
  };

  useEffect(() => {
    const stopSim = startThreatSimulation(sectors, setSectors, addLog);
    return () => {
      if (typeof stopSim === "function") stopSim();
    };
  }, []);

  return (
    <div className="w-screen h-screen flex flex-col bg-black text-white font-mono overflow-hidden">
      <Header logs={logs} />

      {/* MAIN BODY */}
      <div className="flex flex-1 overflow-hidden">
        {/* MAP PANEL */}
        <div className="relative flex-[0.65] flex items-center justify-center">
          <div className="absolute inset-0 bg-black/60" />
          <div className="relative w-[90%] h-[85%]">
            <img
              src={mapImage}
              alt="City Map"
              className="w-full h-full object-cover rounded-xl opacity-80 border border-green-500 shadow-lg"
            />
            {sectors.map((sector) => (
              <div
                key={sector.id}
                className="absolute"
                style={{
                  top: `${sector.y}%`,
                  left: `${sector.x}%`,
                  transform: "translate(-50%, -50%)",
                }}
              >
                <Link to={`/${sector.name.replace(/[\s&/]+/g, "")}`}>
                  <div
                    onClick={() =>
                      setSelected((prev) => (prev?.id === sector.id ? null : sector))
                    }
                    className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-300 shadow-lg ${
                      sector.status === "threat"
                        ? "bg-red-500 animate-pulse shadow-[0_0_8px_red]"
                        : "bg-green-400 shadow-[0_0_6px_#22c55e]"
                    }`}
                  ></div>
                </Link>
                <p
                  className={`mt-1 text-[10px] font-semibold text-center ${
                    sector.status === "threat"
                      ? "text-red-400 drop-shadow-[0_0_3px_red]"
                      : "text-green-300 drop-shadow-[0_0_3px_#22c55e]"
                  }`}
                >
                  {sector.name}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CONSOLE PANEL */}
        <div className="flex-[0.35] h-full bg-[#0a0a0a]/80 border-l border-green-500 flex flex-col justify-start items-center p-4">
          <h2 className="text-3xl text-green-400 mb-3 tracking-wider">AI-SecGrid Console</h2>
          <p className="text-sm text-gray-400 mb-3">
            Heuristic Defense System: ACTIVE
          </p>

          <div className="w-[90%] flex-1 bg-black/60 rounded-xl border border-green-500 p-4 overflow-y-auto mb-4">
            {sectors.map((sec) => (
              <div
                key={sec.id}
                className={`flex justify-between mb-2 text-sm ${
                  sec.status === "threat" ? "text-red-400" : "text-green-300"
                }`}
              >
                <span>{sec.name}</span>
                <span>{sec.status === "threat" ? "⚠ Breach" : "✔ Secure"}</span>
              </div>
            ))}
          </div>

          {selected && (
            <div
              className={`w-[90%] p-3 rounded-lg transition-all duration-300 ${
                selected.status === "threat"
                  ? "border border-red-500 bg-red-950/40"
                  : "border border-white/40 bg-white/10"
              }`}
            >
              <h2
                className={`text-lg font-bold mb-2 ${
                  selected.status === "threat" ? "text-red-400" : "text-white"
                }`}
              >
                {selected.name} Sector
              </h2>
              <p className="text-sm text-gray-400">
                Status:{" "}
                <span
                  className={
                    selected.status === "threat"
                      ? "text-red-400"
                      : "text-green-400"
                  }
                >
                  {selected.status === "threat"
                    ? "Active Threat Detected"
                    : "Secure and Stable"}
                </span>
              </p>
            </div>
          )}
        </div>
      </div>

      {/* SYSTEM LOGS */}
      <div className="h-[30%] bg-black border-t border-green-500 px-6 pb-3 overflow-y-auto relative">
        <div className="sticky top-0 bg-black z-20 py-1">
          <h2 className="text-green-400 font-bold text-sm tracking-widest border-b border-green-500 pb-1">
            System Logs
          </h2>
        </div>

        {logs.length === 0 && (
          <p className="text-gray-600 mt-2">Awaiting activity...</p>
        )}
        {logs.map((log, i) => (
          <p
            key={i}
            className={`text-xs mt-1 ${
              log.type === "threat" ? "text-red-400" : "text-green-400"
            }`}
          >
            [{log.time}] {log.message}
          </p>
        ))}
      </div>
    </div>
  );
}

// 🔹 App Wrapper (handles single initial loader)
function AppWrapper() {
  const [initialLoading, setInitialLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setInitialLoading(false), 4000);
    return () => clearTimeout(timer);
  }, []);

  if (initialLoading) {
    return (
      <div className="w-screen h-screen flex items-center justify-center bg-black">
        <img
          src={loadingGif}
          alt="Loading..."
          className="w-screen h-screen object-cover"
        />
      </div>
    );
  }

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Chemical" element={<><Header /><Chemical /></>} />
      <Route path="/CommercialFacilities" element={<><Header /><Commercial /></>} />
      <Route path="/Communications" element={<><Header /><Communications /></>} />
      <Route path="/CriticalManufacturing" element={<><Header /><CriticalManufacturing /></>} />
      <Route path="/Dams" element={<><Header /><Dams /></>} />
      <Route path="/DefenseIndustrialBase" element={<><Header /><Defense /></>} />
      <Route path="/EmergencyServices" element={<><Header /><Emergency /></>} />
      <Route path="/Energy" element={<><Header /><Energy /></>} />
      <Route path="/FinancialServices" element={<><Header /><Financial /></>} />
      <Route path="/FoodAgriculture" element={<><Header /><Food /></>} />
      <Route path="/GovernmentFacilities" element={<><Header /><Government /></>} />
      <Route path="/HealthcarePublicHealth" element={<><Header /><Healthcare /></>} />
      <Route path="/InformationTechnology" element={<><Header /><IT /></>} />
      <Route path="/NuclearReactorsMaterials" element={<><Header /><Nuclear /></>} />
      <Route path="/Transportation" element={<><Header /><Transportation /></>} />
      <Route path="/WaterWastewater" element={<><Header /><Water /></>} />
    </Routes>
  );
}

export default function MainApp() {
  return (
    <Router>
      <AppWrapper />
    </Router>
  );
}
