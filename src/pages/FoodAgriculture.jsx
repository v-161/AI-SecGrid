// src/pages/FoodAgriculture.jsx
import React from "react";
import SectorTemplate from "./SectorTemplate";
import img from "../assets/sectors/food_agriculture.jpg";


const subsectors = [
  {
    name: "Farming & Production",
    threats: [
      { title: "Sensor manipulation (yield/feeder)", cia: "Integrity/Availability" },
      { title: "Supply chain tampering", cia: "Integrity/Confidentiality" },
    ],
  },
  {
    name: "Processing & Storage",
    threats: [
      { title: "Temperature control tampering", cia: "Integrity/Availability" },
    ],
  },
];

export default function FoodAgriculture() {
  return <SectorTemplate sectorName="Food & Agriculture" imageSrc={img} subsectors={subsectors} />;
}
