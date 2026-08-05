import React from "react";
import { FaEye, FaTemperatureHigh, FaWind } from "react-icons/fa";
import { WiHumidity, WiSunrise, WiSunset } from "react-icons/wi";
import DetailCard from "./detail-card";

const WeatherDetails = ({ weather }) => {
  const { humidity, wind, feelsLike, visibility, sunrise, sunset } = weather;

  const details = [
    {
      icon: <WiHumidity className="text-blue-600 w-8 h-8 lg:w-10 lg:h-10" />,
      title: "Humidity",
      value: `${humidity}%`,
    },
    {
      icon: <FaWind className="text-gray-300 w-8 h-8 lg:w-10 lg:h-10" />,
      title: "Wind",
      value: `${wind}km/h`,
    },
    {
      icon: <FaTemperatureHigh className="text-pink-500 w-8 h-8 lg:w-10 lg:h-10" />,
      title: "Feels Like",
      value: `${feelsLike}°C`,
    },
    {
      icon: <FaEye className="text-cyan-300 w-8 h-8 lg:w-10 lg:h-10" />,
      title: "Visibility",
      value: `${visibility} km`,
    },
    {
      icon: <WiSunrise className="text-yellow-400 w-8 h-8 lg:w-10 lg:h-10" />,
      title: "Sunrise",
      value: sunrise,
    },
    {
      icon: <WiSunset className="text-orange-400 w-8 h-8 lg:w-10 lg:h-10" />,
      title: "Sunset",
      value: sunset,
    },
  ];
  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
      {details.map((detail) => (
        <DetailCard
          key={detail.title}
          icon={detail.icon}
          title={detail.title}
          value={detail.value}
        />
      ))}
    </div>
  );
};

export default WeatherDetails;
