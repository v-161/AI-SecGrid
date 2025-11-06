// src/pages/Emergency.jsx
import React from "react";
import SectorTemplate from "./SectorTemplate";
import img from "../assets/sectors/emergency.jpg";


const subsectors = [
  {
    name: "Dispatch & 911 Systems",
    threats: [
      { title: "Service disruption (DDoS)", cia: "Availability" },
      { title: "False dispatch injection", details: "Fake calls/coords", cia: "Integrity/Availability" },
    ],
  },
  {
    name: "Ambulance & Response Fleet",
    threats: [
      { title: "Vehicle GPS spoofing", cia: "Integrity/Availability" },
    ],
  },
];

export default function Emergency() {
  return <SectorTemplate sectorName="Emergency Services" imageSrc={img} subsectors={subsectors} />;
}
