import React from "react";

import BioFeed from "./BioComponents/BioFeed";
import BioProfile from "./BioComponents/BioProfile";

import "./Bio.css";

const Bio = () => {
  return (
    <div className="bio-section flex justify-evenly">
      {/* // <BioProfile /> */}
      <BioProfile />
      <BioFeed />
    </div>
  );
};

export default Bio;
