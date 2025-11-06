// src/pages/Water.jsx
import React from "react";
import SectorTemplate from "./SectorTemplate";
import img from "../assets/sectors/water.jpg";


const subsectors = [
  {
    name: "Water Treatment",
    threats: [
      { title: "Chemical dosing tampering", details: "Alter contaminant levels", cia: "Integrity/Availability" },
      { title: "SCADA compromise", cia: "Integrity/Availability" },
    ],
  },
  {
    name: "Distribution & Sewage",
    threats: [
      { title: "Pump control hijack", cia: "Availability" },
      { title: "Meter data manipulation", cia: "Integrity/Confidentiality" },
    ],
  },
];

export default function Water() {
  return <SectorTemplate sectorName="Water & Wastewater" imageSrc={img} subsectors={subsectors} />;
}
