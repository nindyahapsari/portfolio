import React from "react";
import myPict from "../images/portfolio_pict.jpeg";
import BioContent from "./BioContent";

const extra = (
  <a>
    <Icon name="user" />
    16 Friends
  </a>
);

const BioProfile = () => {
  return (
    <>
      <div className="flex flex-col bg-white  rounded-xl  overflow-hidden max-w-md mx-auto">
        <img className="w-full object-cover" src={myPict} alt="Elliot" />
        <BioContent
          name="Nindya Hapsari"
          titel="Web Developer / Frontend Developer"
          descriptions="I am a frontend developer currently living in Berlin"
          job="Looking for a new position"
        />
      </div>
    </>
  );
};

export default BioProfile;
