import React from "react";
import { FaCalendarAlt } from "react-icons/fa";
import { FaClock, FaLocationDot } from "react-icons/fa6";
import { MdUpdate } from "react-icons/md";

const MainWeather = ({ weather }) => {
  const {
    city,
    temperature,
    condition,
    icon,
    time,
    date,
    country,
    lastUpdated,
  } = weather;
  return (
    <div className="flex flex-col  items-center  gap-6 lg:gap-5 mb-9">
      <div className="flex flex-col lg:flex-row gap-8 w-full justify-around items-center">
        <div className="flex flex-col items-center ">
          <div className="flex items-center   gap-2">
            <FaLocationDot className="text-red-500 w-6 h-6" />
            <p className="text-2xl lg:text-3xl font-semibold ">{city}</p>
          </div>

          <p className="text-white/60 text-base mb-4">{country}</p>

          <img
            src={icon}
            alt={`${condition} weather icon`}
            className="
w-24 lg:w-32
h-24 lg:h-32
object-contain
transition-transform
duration-500
hover:scale-110
"
          />
        </div>

        <div className="flex flex-col items-center gap-3">
          <h1 className="text-5xl lg:text-6xl font-bold">{temperature}°C</h1>
          <p className=" text-lg font-medium text-slate-200">{condition}</p>
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-center gap-2">
              <FaClock className="text-white/80 w-5 h-5" />
              <p>{time}</p>
            </div>

            <div className="flex items-center justify-center gap-2">
              <FaCalendarAlt className="text-white/80 w-5 h-5" />
              <p>{date}</p>
            </div>

            <div className="flex items-center justify-center gap-2">
              <MdUpdate className="text-white/80 w-5 h-5" />
              <p>Updated: {lastUpdated.split(" ")[1]}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainWeather;
