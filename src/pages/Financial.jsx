// src/pages/Financial.jsx
import React from "react";
import SectorTemplate from "./SectorTemplate";
import img from "../assets/sectors/financial.jpg";


const subsectors = [
  {
    name: "Banks & Exchanges",
    threats: [
      { title: "Transaction manipulation", cia: "Integrity" },
      { title: "Credential theft & fraud", cia: "Confidentiality" },
      { title: "Availability attacks (DDoS)", cia: "Availability" },
    ],
  },
  {
    name: "Payment Processors",
    threats: [
      { title: "Card skimming/data leakage", cia: "Confidentiality" },
    ],
  },
];

export default function Financial() {
  return <SectorTemplate sectorName="Financial Services" imageSrc={img} subsectors={subsectors} />;
}
