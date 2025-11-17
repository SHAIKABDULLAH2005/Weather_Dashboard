import React from "react";

export default function ForecastList({ forecast }) {
  return (
    <div className="forecast-container">
      <h2>5-Day Forecast</h2>
      <div className="forecast-grid">
        {forecast.map((item, index) => (
          <div key={index} className="forecast-item">
            <p>{new Date(item.dt_txt).toLocaleDateString()}</p>
            <img
              src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
              alt={item.weather[0].description}
            />
            <p>{Math.round(item.main.temp)}°C</p>
            <p>{item.weather[0].main}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
   