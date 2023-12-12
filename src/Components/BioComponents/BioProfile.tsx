import React from "react";
import { Card, Icon, SegmentGroup, Feed } from "semantic-ui-react";
import elliot from "../images/elliot.jpg";

const extra = (
  <a>
    <Icon name="user" />
    16 Friends
  </a>
);

function BioProfile() {
  return (
    <div>
      <Card
        image={elliot}
        header="Nindya Hapsari"
        meta="Web Developer / Frontend Developer"
        description="Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat."
        extra={extra}
      />
    </div>
  );
}

export default BioProfile;
