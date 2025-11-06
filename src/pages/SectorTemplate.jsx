// src/pages/SectorTemplate.jsx
import React from "react";

export default function SectorTemplate({ sectorName, imageSrc, subsectors = [] }) {
  return (
    <div className="w-screen min-h-screen bg-black text-white font-mono">
      {/* Body */}
      <main className="p-6">
        <div className="flex gap-6">
          {/* Left: image */}
          <div className="w-2/3">
            <img
              src={imageSrc}
              alt={`${sectorName}`}
              className="w-full h-[64vh] object-cover rounded-xl border border-green-500 shadow-lg"
            />
          </div>

          {/* Right: subsectors and threats */}
          <aside className="w-1/3">
            <div className="bg-[#070707] border border-green-500 rounded-xl p-4 sticky top-6 max-h-[70vh] overflow-auto">
              <h2 className="text-lg text-green-300 font-semibold mb-3">
                {sectorName} — Subsectors & Threats
              </h2>

              {subsectors.map((sub, i) => (
                <section key={i} className="mb-4">
                  <h3 className="text-sm text-white font-semibold">
                    {i + 1}. {sub.name}
                  </h3>

                  {sub.description && (
                    <p className="text-xs text-gray-400 mb-1">{sub.description}</p>
                  )}

                  <div className="text-xs">
                    <div className="text-red-400 font-semibold">Threats:</div>
                    <ul className="list-disc ml-5 text-gray-300">
                      {sub.threats.map((t, j) => (
                        <li key={j} className="mb-1">
                          <span className="font-medium">{t.title}</span>
                          {t.details ? ` — ${t.details}` : ""}
                          <div className="text-[11px] text-gray-500">
                            Impact: {t.cia}
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </section>
              ))}

              <div className="mt-4 text-xs text-gray-400">
                <div className="font-semibold">Notes</div>
                <div>- Page lists common examples for educational/demo purposes.</div>
                <div>- Real world systems require deeper threat modelling & mitigations.</div>
              </div>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}
