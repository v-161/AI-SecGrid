// src/pages/Communications.jsx
import React from "react";
import SectorTemplate from "./SectorTemplate";
import img from "../assets/sectors/communications.jpg";


const subsectors = [
  {
    name: "Telecom Providers",
    threats: [
      { title: "BGP hijacking", details: "Traffic rerouting/spy", cia: "Confidentiality/Integrity" },
      { title: "DDoS on core routers", cia: "Availability" },
    ],
  },
  {
    name: "Cell Towers & ISP",
    threats: [
      { title: "SIM swap & SS7 attacks", cia: "Confidentiality" },
      { title: "Baseband firmware exploit", cia: "Integrity/Availability" },
    ],
  },
];

export default function Communications() {
  return <SectorTemplate sectorName="Communications" imageSrc={img} subsectors={subsectors} />;
}
