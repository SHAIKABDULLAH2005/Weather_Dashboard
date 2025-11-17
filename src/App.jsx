import React, { useState } from "react";
import axios from "axios";
import SearchBox from "./components/SearchBox";
import WeatherCard from "./components/WeatherCard";
import ForecastList from "./components/ForecastList";
import "./App.css";

//  Replace this with your own API key
const API_KEY = "7d966185878c0efb896f00f4410bb0ee";

export default function App() {
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState([]);

  // 🔍 Function to fetch weather and forecast
  const fetchWeather = async (city) => {
    try {
      //  Get current weather
      const currentResponse = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      setWeather(currentResponse.data);

      //  Get 5-day forecast
      const forecastResponse = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`
      );
      // Take one forecast entry per day (every 8th record = 24 hours)
      const dailyForecast = forecastResponse.data.list.filter((_, index) => index % 8 === 0);
      setForecast(dailyForecast);
    } catch (error) {
      console.error("Error fetching data:", error);
      alert("City not found or API key invalid! Please try again.");
    }
  };

  return (
    <div className="app">
      <h1 className="title"> Weather Dashboard</h1>

      {/* Search input */}
      <SearchBox onSearch={fetchWeather} />

      {/* Current weather card */}
      {weather && <WeatherCard data={weather} />}

      {/* Forecast list */}
      {forecast.length > 0 && <ForecastList forecast={forecast} />}
    </div>
  );
}
