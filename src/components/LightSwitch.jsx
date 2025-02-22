import React, { useState } from "react";

function LightSwitch() {
  const [isDark, setIsDark] = useState(false);

  const toggleLight = () => {
    setIsDark((prev) => !prev);
  };

  return (
    <button className="light-switch" onClick={toggleLight}>
      💡
    </button>
  );
}

export default LightSwitch;
