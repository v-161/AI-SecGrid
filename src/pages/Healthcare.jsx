// src/pages/Healthcare.jsx
import React from "react";
import SectorTemplate from "./SectorTemplate";
import img from "../assets/sectors/healthcare.jpg";


const subsectors = [
  {
    name: "Hospitals & Clinics",
    threats: [
      { title: "Ransomware on EHR systems", cia: "Availability/Confidentiality" },
      { title: "Medical device tampering", details: "Infusion pumps/monitors", cia: "Integrity/Availability" },
    ],
  },
  {
    name: "Public Health Systems",
    threats: [
      { title: "Data leakage of patient records", cia: "Confidentiality" },
    ],
  },
];

export default function Healthcare() {
  return <SectorTemplate sectorName="Healthcare & Public Health" imageSrc={img} subsectors={subsectors} />;
}
