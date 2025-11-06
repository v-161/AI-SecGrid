// src/pages/Commercial.jsx
import React from "react";
import SectorTemplate from "./SectorTemplate";
import img from "../assets/sectors/commercial.jpg";


const subsectors = [
  {
    name: "Shopping Malls & Retail",
    threats: [
      { title: "Point-of-Sale compromise", details: "Card/transaction data leak", cia: "Confidentiality" },
      { title: "Ransomware on POS servers", cia: "Availability/Integrity" },
    ],
  },
  {
    name: "Office Complexes",
    threats: [
      { title: "Access control bypass", details: "Physical security and building management", cia: "Confidentiality/Availability" },
    ],
  },
];

export default function Commercial() {
  return <SectorTemplate sectorName="Commercial Facilities" imageSrc={img} subsectors={subsectors} />;
}
