import React, { useMemo } from "react";

const RainEffect = () => {
  const rainDrops = useMemo(() => {
    return Array.from({ length: 20 }, () => ({
      left: Math.random() * 120,
      duration: 1 + Math.random() * 2,
      delay: Math.random() * 2,
    }));
  }, []);
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {rainDrops.map((drop, index) => (
        <div
          key={index}
          className="absolute w-[1.5px] h-10  rounded-full bg-gradient-to-b from-blue-400 to-transparent animate-[rain_linear_infinite]"
          style={{
            left: `${drop.left}%`,
            top: "-50px",
            animationDuration: `${drop.duration}s`,
            animationDelay: `${drop.delay}s`,
          }}
        ></div>
      ))}
    </div>
  );
};

export default RainEffect;
