import React from "react";

export default function ForecastDay({data, unit}) {
  function maxTemperature() {
    let temperature = Math.round(data.temperature.maximum);
    if (unit !== "celsius") {
      temperature = Math.round((temperature * 9) / 5 + 32);
    } 
    return `${temperature}°`;
  }
  function minTemperature() {
    let temperature = Math.round(data.temperature.minimum);
    if (unit !== "celsius") {
      temperature = Math.round((temperature * 9) / 5 + 32);
    }
    return `${temperature}°`;
  }
  function icon() {
    let iconUrl = data.condition.icon_url;
    return iconUrl;
  }
  function day() {
    let date = new Date(data.time * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mo", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
  }
  return (
    <div className="card-body">
      <div className="card-title weekday"> {day()} </div>
      <img src={icon()} alt="Icon" className="forecastIcon" />
      <p className="card-text temperature">
        {maxTemperature()}{" "}
        <span className="minTemperature"> {minTemperature()}</span>
      </p>
    </div>
  );
}
