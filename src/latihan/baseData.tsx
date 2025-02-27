import React from "react";
import { Hero, FeaturedListings, VisionMission } from "./Hero";
import Navbar from "./navbarCihuy";
import RealEstateExperience from "./RealEstateExperience";
import PropertyNeighborhoods from "./PropertyNeighborhoods";

const Base: React.FC = () => {
  return (
    <div className="font-sans text-gray-900">
      <Navbar />
      <Hero />
      <FeaturedListings />
      <VisionMission />
      <RealEstateExperience />
      <PropertyNeighborhoods />
    </div>
  );
};

export default Base;
