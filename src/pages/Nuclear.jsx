// src/pages/Nuclear.jsx
import React from "react";
import SectorTemplate from "./SectorTemplate";
import img from "../assets/sectors/nuclear.jpg";

const subsectors = [
  {
    name: "Reactor Control Systems",
    threats: [
      { title: "Control command manipulation", cia: "Integrity/Availability" },
      { title: "Sensor spoofing causing false readings", cia: "Integrity" },
    ],
  },
  {
    name: "Materials Handling & Storage",
    threats: [
      { title: "Theft or misreporting of material inventories", cia: "Confidentiality/Integrity" },
    ],
  },
];

export default function Nuclear() {
  return <SectorTemplate sectorName="Nuclear Reactors/Materials" imageSrc={img} subsectors={subsectors} />;
}
