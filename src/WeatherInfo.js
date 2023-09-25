import React from "react";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo({data, unit, setUnit}) {
  function feelsLike() {
    let temperature = Math.round(data.feelsLike);
    if (unit !== "celsius") {
      temperature = Math.round((temperature * 9) / 5 + 32);
    } 
    return `${temperature}°` + (unit !== "celsius" ? "F" : "C");
  }
  return (
    <div className="row main-info">
      <div className="col-md-2 col-sm-3 cityTemperatureNow">
        <div className="cityMain"> {data.city}</div>
        <WeatherTemperature
          celsius={data.temperature}
          unit={unit}
          setUnit={setUnit}
        />
      </div>

      <div className="col-md-2 col-sm-3 weather-description">
        <img
          src={data.imageUrl}
          alt={data.description}
          className="weatherIcon"
        />
        <div className="temperature-status text-capitalize">
          {data.description}
        </div>
      </div>
      <div className="col additional-info">
        <div className="feelsLike">feels like: {feelsLike()}</div>
        <div className="humidity">humidity: {data.humidity}%</div>
        <div className="wind">wind: {data.wind}km/h</div>
      </div>
    </div>
  );
}
