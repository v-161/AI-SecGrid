// src/pages/IT.jsx
import React from "react";
import SectorTemplate from "./SectorTemplate";
import img from "../assets/sectors/it.jpg";


const subsectors = [
  {
    name: "Data Centers & Cloud",
    threats: [
      { title: "Unauthorized access / lateral movement", cia: "Confidentiality/Integrity" },
      { title: "Hypervisor escape / tenant isolation failure", cia: "Confidentiality/Integrity" },
      { title: "Resource exhaustion attacks", cia: "Availability" },
    ],
  },
  {
    name: "Enterprise Networks",
    threats: [
      { title: "Supply-chain API compromise", cia: "Integrity/Confidentiality" },
    ],
  },
];

export default function IT() {
  return <SectorTemplate sectorName="Information Technology" imageSrc={img} subsectors={subsectors} />;
}
