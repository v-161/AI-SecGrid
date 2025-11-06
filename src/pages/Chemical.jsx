// src/pages/Chemical.jsx
import React from "react";
import SectorTemplate from "./SectorTemplate";
import img from "../assets/sectors/chemical.jpg";


const subsectors = [
  {
    name: "Manufacturing Plants",
    description: "Large-scale chemical production lines and control systems.",
    threats: [
      { title: "Process data tampering", details: "Altering recipes/temperatures", cia: "Integrity" },
      { title: "Remote actuator override", details: "Open valves, change flow rates", cia: "Availability/Integrity" },
      { title: "Proprietary formula leak", details: "Intellectual property theft", cia: "Confidentiality" },
    ],
  },
  {
    name: "Storage & Transport",
    threats: [
      { title: "GPS tracking spoofing", details: "Hijack shipments", cia: "Integrity/Availability" },
      { title: "Sensor spoofing", cia: "Integrity" },
    ],
  },
];

export default function Chemical() {
  return <SectorTemplate sectorName="Chemical Sector" imageSrc={img} subsectors={subsectors} />;
}
