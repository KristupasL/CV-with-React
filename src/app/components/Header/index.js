import React from "react";

import Title from "../Title";

import "./index.scss";
import pictureOfMe from "../../person.jpg";
import blueStroke from "../../brush-stroke-three.png";

function Header() {
  return (
    <header className="Header">
      <div className="Header--image">
        <img src={pictureOfMe} alt="My headshot" />
      </div>
      <div className="Header--title">
        <Title>Kristupas Lapeika</Title>
        <Title
          level="3"
          colorClass="color-purple-light"
          weightClass="font-weight-400"
        >
          Front-End Developer
        </Title>
      </div>
      <img src={blueStroke} alt="blue stroke" className="Header--decoration" />
    </header>
  );
}

export default Header;
