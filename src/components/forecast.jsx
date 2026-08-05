import { motion } from "framer-motion";
import React from "react";

const Forecast = ({ forecast }) => {
  return (
    <div className="mt-6 flex flex-wrap lg:flex-nowrap justify-center gap-10">
      {forecast.map((day, index) => {
        const date = new Date(day.date);

        const dayName =
          index === 0
            ? "Today"
            : index === 1
              ? "Tomorrow"
              : date.toLocaleDateString("en-US", { weekday: "short" });

        return (
          <motion.div
            key={day.date}
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: index * 0.15,
            }}
            className="
    bg-white/20
    group
    w-36
    lg:w-45
    backdrop-blur-md
    rounded-2xl
    p-4
    flex
    flex-col
    items-center
    transition-all
    duration-300
    hover:-translate-y-2
    hover:scale-105
    hover:bg-white/30
    hover:shadow-2xl
  "
          >
            <p  className="px-2 py-1 rounded-full bg-violet-500/40 text-violet-200 text-xs font-semibold">{dayName}</p>

            <img
              src={day.icon}
              alt={day.condition}
              className="w-10 h-10 lg:w-12 lg:h-12 transition-transform duration-300 group-hover:scale-125"
            />

            <p className="text-white/80 text-base lg:text-lg text-center">{day.condition}</p>

            <p className="text-white font-bold mt-2">
              {day.maxTemp}°<span className="text-white/60"> / </span>
              {day.minTemp}°
            </p>
          </motion.div>
        );
      })}
    </div>
  );
};

export default Forecast;
