// src/pages/Defense.jsx
import React from "react";
import SectorTemplate from "./SectorTemplate";
import img from "../assets/sectors/defense.jpg";


const subsectors = [
  {
    name: "Defense Contractors",
    threats: [
      { title: "Espionage & data exfiltration", cia: "Confidentiality" },
      { title: "Compromise of test environments", cia: "Integrity" },
    ],
  },
  {
    name: "Secure Facilities",
    threats: [
      { title: "Access system manipulation", cia: "Confidentiality/Integrity" },
    ],
  },
];

export default function Defense() {
  return <SectorTemplate sectorName="Defense Industrial Base" imageSrc={img} subsectors={subsectors} />;
}
