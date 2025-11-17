import React from "react";
import { WiThermometer, WiHumidity, WiStrongWind } from "react-icons/wi";

export default function WeatherCard({ data }) {
  return (
    <div className="weather-card">
      <h2>{data.name}</h2>
      <h3>{data.weather[0].description}</h3>
      <img
        src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
        alt="weather-icon"
      />
      <div className="temp">{Math.round(data.main.temp)}°C</div>
      <div className="details">
        <p><WiThermometer /> Feels like: {Math.round(data.main.feels_like)}°C</p>
        <p><WiHumidity /> Humidity: {data.main.humidity}%</p>
        <p><WiStrongWind /> Wind: {data.wind.speed} m/s</p>
      </div>
    </div>
  );
}
