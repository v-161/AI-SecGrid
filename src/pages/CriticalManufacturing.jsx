// src/pages/CriticalManufacturing.jsx
import React from "react";
import SectorTemplate from "./SectorTemplate";
import img from "../assets/sectors/critical_manufacturing.jpg";


const subsectors = [
  {
    name: "Automotive & Electronics",
    threats: [
      { title: "Supply-chain tampering", details: "Hardware/firmware backdoors", cia: "Integrity/Confidentiality" },
      { title: "PLC compromise", details: "Production halt or sabotage", cia: "Availability/Integrity" },
    ],
  },
  {
    name: "Defense-related Manufacturing",
    threats: [
      { title: "IP theft", cia: "Confidentiality" },
      { title: "Sabotage of production lines", cia: "Availability" },
    ],
  },
];

export default function CriticalManufacturing() {
  return <SectorTemplate sectorName="Critical Manufacturing" imageSrc={img} subsectors={subsectors} />;
}
