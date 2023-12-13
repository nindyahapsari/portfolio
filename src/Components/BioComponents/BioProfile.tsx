import React from "react";
import { Card, Icon, SegmentGroup, Feed } from "semantic-ui-react";
import elliot from "../images/elliot.jpg";
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
        <img className="w-full object-cover" src={elliot} alt="Elliot" />
        <BioContent
          name="Nindya Hapsari"
          titel="Web Developer / Frontend Developer"
          descriptions="Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat."
          job="Looking for a new position"
        />
      </div>
    </>
  );
};

export default BioProfile;
