import React from "react";
import StatDisplay from "./components/StatDisplay";

function Home() {
  return (
    <>
      <div className="Navbar">
        <button className="NavbarButton">OverallHealth</button>
        <button className="NavbarButton">Feed</button>
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
          <img
            src="/src\assets\happyguybigger.gif"
            alt="Tamagotchi"
            className="sprite"
          />
        </div>
      </div>
    </>
  );
}

export default Home;
