import React from "react";

import BioFeed from "./BioComponents/BioFeed";
import BioProfile from "./BioComponents/BioProfile";

import "./Bio.css";

const Bio = () => {
  return (
    <div className="bio-section">
      <BioProfile />
      <BioFeed />
    </div>
  );
};

export default Bio;
