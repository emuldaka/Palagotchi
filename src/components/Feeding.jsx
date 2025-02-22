import React, { useState } from "react";

const Feeding = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleClick = () => {
    setIsVisible(true);
    setTimeout(() => {
      setIsVisible(false);
    }, 2000); // Hide after 2 seconds
  };

  return (
    <div>
      <button onClick={handleClick}>Feed</button>
      {isVisible && <div className="pizza-emoji">🍕</div>}
    </div>
  );
};

export default Feeding;
