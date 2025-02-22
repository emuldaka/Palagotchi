import React from "react";
import StatDisplay from "./components/StatDisplay";
import Pooping from "./components/Pooping";
import LightSwitch from "./components/LightSwitch";
import Feeding from "./components/Feeding";

function Home() {
  return (
    <>
      <div className="Navbar">
        <button className="NavbarButton">
          <Feeding />
        </button>
        <button className="NavbarButton">Sanitation</button>
        <button className="NavbarButton">Fitness</button>
        <button className="NavbarButton">Learning</button>
      </div>
      <div className="palagotchiNameTitle">PALAGOTCHI NAME</div>
      <div className="game-container">
        <div className="statDisplay-container">
          <StatDisplay type="Health" />
          <StatDisplay type="Hunger" />
          <StatDisplay type="Happiness" />
        </div>
        <div className="sprite-container">
          <Feeding />
          <img
            src="/src\assets\brisprite-3.png_1.png"
            alt="Tamagotchi"
            className="sprite"
          />
          <Pooping />
          <LightSwitch />
        </div>
      </div>
    </>
  );
}

export default Home;
