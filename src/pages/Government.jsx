// src/pages/Government.jsx
import React from "react";
import SectorTemplate from "./SectorTemplate";
import img from "../assets/sectors/government.jpg";


const subsectors = [
  {
    name: "Civic Records & Identity",
    threats: [
      { title: "Data breaches (citizen records)", cia: "Confidentiality" },
      { title: "Record tampering", cia: "Integrity" },
    ],
  },
  {
    name: "E-Government Services",
    threats: [
      { title: "Service outages", cia: "Availability" },
      { title: "Credential compromise", cia: "Confidentiality" },
    ],
  },
];

export default function Government() {
  return <SectorTemplate sectorName="Government Facilities" imageSrc={img} subsectors={subsectors} />;
}
