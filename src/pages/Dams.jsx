// src/pages/Dams.jsx
import React from "react";
import SectorTemplate from "./SectorTemplate";
import img from "../assets/sectors/dams.jpg";


const subsectors = [
  {
    name: "Reservoir Control Systems",
    threats: [
      { title: "SCADA takeover", details: "Open/close sluices remotely", cia: "Integrity/Availability" },
      { title: "Sensor falsification", cia: "Integrity" },
    ],
  },
  {
    name: "Hydropower Stations",
    threats: [
      { title: "Turbine control manipulation", cia: "Availability/Integrity" },
    ],
  },
];

export default function Dams() {
  return <SectorTemplate sectorName="Dams" imageSrc={img} subsectors={subsectors} />;
}
