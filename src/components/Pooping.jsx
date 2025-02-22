import React, { useEffect, useState } from "react";

function Pooping() {
  const [poop, setPoop] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setPoop((prev) => [
        ...prev,
        {
          id: Date.now(),
          x: Math.random() * 90,
          y: Math.random() * 90,
        },
      ]);
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  const removePoop = (id) => {
    setPoop((prev) =>
      Array.isArray(prev) ? prev.filter((poop) => poop.id !== id) : []
    );
  };

  return (
    <div className="relative w-full h-full border bg-green-200">
      {poop.map((p) => (
        <button
          key={p.id}
          onClick={() => removePoop(p.id)}
          className="absolute w-10 h-10 bg-brown-600 rounded-full hover:scale-110 transition-transform"
          style={{
            top: `${p.y}%`,
            left: `${p.x}%`,
            transform: "translate(-50%, -50%)",
          }}
        >
          💩
        </button>
      ))}
    </div>
  );
}

export default Pooping;
