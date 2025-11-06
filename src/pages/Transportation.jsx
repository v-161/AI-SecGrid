// src/pages/Transportation.jsx
import React from "react";
import SectorTemplate from "./SectorTemplate";
import img from "../assets/sectors/transportation.jpg";


const subsectors = [
  {
    name: "Railways",
    threats: [
      { title: "Signal system tampering", details: "Switch/track signal corruption", cia: "Safety/Integrity/Availability" },
      { title: "GPS spoofing of rolling stock", cia: "Integrity/Availability" },
    ],
  },
  {
    name: "Airways",
    threats: [
      { title: "ADS-B spoofing / comms interception", cia: "Integrity/Confidentiality" },
      { title: "Ground system outages", cia: "Availability" },
    ],
  },
  {
    name: "Waterways",
    threats: [
      { title: "AIS spoofing", details: "Vessel location falsification", cia: "Integrity/Availability" },
      { title: "Port operations disruption", cia: "Availability" },
    ],
  },
];

export default function Transportation() {
  return <SectorTemplate sectorName="Transportation" imageSrc={img} subsectors={subsectors} />;
}
