import React, { useEffect, useState } from "react";
import { GiHealthNormal } from "react-icons/gi";
import { IoFastFoodSharp } from "react-icons/io5";
import { RiEmotionHappyFill } from "react-icons/ri";

function StatDisplay({ type }) {
  const [HP, setHP] = useState(75);
  const [hunger, setHunger] = useState(5);
  const [happiness, setHappiness] = useState(100);

  useEffect(() => {
    const interval = setInterval(() => {
      setHunger((prev) => Math.min(100, prev + 1));
      setHappiness((prev) => Math.max(0, prev - 1));
      setHP((prev) => (hunger >= 100 ? prev - 10 : prev));
    }, 3000);
    return () => clearInterval(interval);
  }, [HP, hunger, happiness]);

  if (type === "Health") {
    return (
      <>
        <div className="HP-text">{HP} HP</div>
        <div className="HP-icon" style={{ "--hp": `${HP}%` }}>
          ❤️
        </div>
      </>
    );
  } else if (type === "Hunger") {
    return (
      <>
        <div className="Hunger-text">{hunger} HUNGER</div>
        <div className="Hunger-icon" style={{ "--hungry": `${hunger}%` }}>
          🍕
        </div>
      </>
    );
  } else if (type === "Happiness") {
    return (
      <>
        <div className="Happiness-text">{happiness} HAPPINESS</div>
        <div className="Happiness-icon" style={{ "--happi": `${happiness}%` }}>
          😀
        </div>
      </>
    );
  } else {
    return <div>Talk to dev</div>;
  }
}

export default StatDisplay;
