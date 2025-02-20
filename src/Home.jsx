import React from "react";

function Home() {
  return (
    <>
      <div className="Navbar">
        <button className="NavbarButton">OverallHealth</button>
        <button className="NavbarButton">Food/Hunger</button>
        <button className="NavbarButton">Sanitation</button>
        <button className="NavbarButton">Happiness</button>
        <button className="NavbarButton">Fitness</button>
        <button className="NavbarButton">Learning</button>
      </div>
      <h2>Achilles</h2>
      <div className="game-container">
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
