import React from "react";
import { Card, Icon, SegmentGroup, Feed } from "semantic-ui-react";
import elliot from "./images/elliot.jpg";

import BioFeed from "./BioComponents/BioFeed";

const extra = (
  <a>
    <Icon name="user" />
    16 Friends
  </a>
);

const Bio = () => {
  return (
    <div>
      <Card
        image={elliot}
        header="Elliot Baker"
        meta="Friend"
        description="Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat."
        extra={extra}
      />
      <BioFeed />
    </div>
  );
};

export default Bio;
