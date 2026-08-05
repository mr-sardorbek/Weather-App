import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  BackgroundEffects,
  ErrorCard,
  ForeCast,
  Loading,
  MainWeather,
  SearchBar,
  WeatherCard,
  WeatherDetails,
  Welcome,
} from "./components";

const App = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [forecast, setForecast] = useState([]);

  // Punta Arenas
  const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

  const API_URL = `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${city}&days=5`;

  const getBackground = (condition) => {
    if (!condition) {
      return "bg-gradient-to-br from-sky-400 via-blue-500 to-indigo-700";
    }

    const weather = condition.toLowerCase();
    if (weather.includes("sun") || weather.includes("clear")) {
      return "bg-gradient-to-br  from-yellow-300  via-orange-400  to-pink-500";
    }
    if (weather.includes("cloud") || weather.includes("overcast")) {
      return "bg-gradient-to-br from-slate-400 via-slate-500 to-slate-700";
    }
    if (weather.includes("rain") || weather.includes("drizzle")) {
      return "bg-gradient-to-br from-sky-700 via-blue-800 to-slate-900";
    }
    if (weather.includes("snow") || weather.includes("blizzard")) {
      return "bg-gradient-to-br from-cyan-100 via-slate-400 to-slate-400";
    }
    if (weather.includes("thunder")) {
      return "bg-gradient-to-br from-gray-800 via-slate-900 to-black";
    }
    if (weather.includes("mist") || weather.includes("fog")) {
      return "bg-gradient-to-br from-gray-300 via-slate-400 to-gray-600";
    }

    return "bg-gradient-to-br from-sky-400 via-blue-500 to-indigo-700";
  };

  const searchCity = async () => {
    if (!city.trim()) {
  setError("Please enter a city name");
  return;
}
    setLoading(true);
    setError("");
    

    try {
      await new Promise((resolve) => setTimeout(resolve, 300));
      const response = await fetch(API_URL);

      if (!response.ok) {
        throw new Error("City not found");
      }

      const data = await response.json();
      const weatherData = {
        city: data.location.name,
        country: data.location.country,
        lastUpdated: data.current.last_updated,
        temperature: data.current.temp_c,
        visibility: data.current.vis_km,
        condition: data.current.condition.text,
        icon: `https:${data.current.condition.icon}`,
        humidity: data.current.humidity,
        wind: data.current.wind_kph,
        feelsLike: data.current.feelslike_c,
        sunrise: data.forecast.forecastday[0].astro.sunrise,
        sunset: data.forecast.forecastday[0].astro.sunset,
        time: data.location.localtime.split(" ")[1],
        date: data.location.localtime.split(" ")[0],
      };

      const forecastData = data.forecast.forecastday.map((day) => ({
        date: day.date,
        maxTemp: day.day.maxtemp_c,
        minTemp: day.day.mintemp_c,
        condition: day.day.condition.text,
        icon: `https:${day.day.condition.icon}`,
      }));

      setForecast(forecastData);
      console.log(data.forecast.forecastday);

      setWeather(weatherData);
      setCity("");
    } catch (error) {
      setError(error.message);
      setWeather(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className={`relative min-h-screen flex flex-col items-center justify-center ${getBackground(weather?.condition)}`}
    >
      <BackgroundEffects condition={weather?.condition} />
      <SearchBar
        city={city}
        setCity={setCity}
        searchCity={searchCity}
        loading={loading}
      />
      {loading ? (
        <Loading />
      ) : error ? (
        <ErrorCard message={error} />
      ) : weather ? (
        <>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <WeatherCard>
              <MainWeather weather={weather} />
              <div className="my-6 h-px bg-white/10" />
              <WeatherDetails weather={weather} />
              <div className="my-8 h-px bg-white/20"></div>
            <ForeCast forecast={forecast} />
            </WeatherCard>
          </motion.div>
        </>
      ) : (
        <Welcome/>
      )}
    </div>
  );
};

export default App;
