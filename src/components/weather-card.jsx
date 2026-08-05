import React from "react";

const WeatherCard = ({ children }) => {
  return (
    <div
      className="
        w-full
        max-w-3xl

        rounded-3xl
        bg-white/20
        backdrop-blur-xl
        border
        border-white/20
        shadow-2xl

        p-5
        sm:p-6
        lg:p-8

        mt-4"
    >
      {children}
    </div>
  );
};

export default WeatherCard;