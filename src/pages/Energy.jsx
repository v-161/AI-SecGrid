// src/pages/Energy.jsx
import React from "react";
import SectorTemplate from "./SectorTemplate";
import img from "../assets/sectors/energy.jpg";


const subsectors = [
  {
    name: "Power Grid",
    threats: [
      { title: "SCADA/ICS Malware", details: "Targeting control systems", cia: "Integrity/Availability" },
      { title: "Load manipulation", cia: "Availability" },
      { title: "Meter tampering", cia: "Integrity/Confidentiality" },
    ],
  },
  {
    name: "Oil & Gas Pipelines",
    threats: [
      { title: "Valve/pressure tampering", cia: "Availability/Integrity" },
      { title: "Telemetry spoofing", cia: "Integrity" },
    ],
  },
  {
    name: "Renewables & Inverters",
    threats: [
      { title: "Inverter firmware hijack", cia: "Availability/Integrity" },
    ],
  },
];

export default function Energy() {
  return <SectorTemplate sectorName="Energy" imageSrc={img} subsectors={subsectors} />;
}
