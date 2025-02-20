import React from "react";
import { GiDinosaurRex } from "react-icons/gi";
import { FaCat } from "react-icons/fa";
import { FaDragon } from "react-icons/fa6";

function PalagotchiCreator() {
  return (
    <>
      <div>PalagotchiCreator</div>
      <div className="palagotchiNameInput">
        <input placeholder="Enter Palagotchi Name"></input>
      </div>
      <div className="palagotchiSpriteSelectorTitle">Select Palagotchi:</div>
      <div className="palagotchiSpriteSelector">
        <div className="palagotchiSprite">
          <GiDinosaurRex size={100} style={{ height: 100, width: 100 }} />
        </div>
        <div className="palagotchiSprite">
          <FaCat size={100} style={{ height: 100, width: 100 }} />
        </div>
        <div className="palagotchiSprite">
          <FaDragon size={100} style={{ height: 100, width: 100 }} />
        </div>
      </div>
      <div className="palagotchiColorPatternSelectorTitle">
        Select Palagotchi Color Pattern:
      </div>
      <div className="palagotchiColorPatternSelector">
        <div className="palagotchiColorPattern"> Black</div>
        <div className="palagotchiColorPattern"> Blue</div>
        <div className="palagotchiColorPattern"> Red</div>
      </div>
      <button className="palagotchiCreatorFormSubmition">
        Submit Creation Form
      </button>
    </>
  );
}

export default PalagotchiCreator;
