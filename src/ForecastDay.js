import React from "react"

export default function ForecastDay(props) {
    function maxTemperature() {
        let temperature = Math.round(props.data.temperature.maximum);
        return `${temperature}°`;
      }
      function minTemperature() {
        let temperature = Math.round(props.data.temperature.minimum);
        return `${temperature}°`;
      }
      function icon() {
        let iconUrl= props.data.condition.icon_url;
        return iconUrl
      }
    function day() {
        let date = new Date(props.data.time * 1000);
        let day = date.getDay();

        let days =  ["Sun", "Mo", "Tue", "Wed", "Thu", "Fri", "Sat"];
        return days[day];
    }


    return (
        
        <div className="card-body">
           
        <div className="card-title weekday"> {day()} </div>
        <img
          src={icon()}
          alt="Icon"
          className="forecastIcon"
        />
        <p className="card-text temperature">
          {maxTemperature()} <span className="minTemperature"> {minTemperature()}</span>
        </p>
      </div>
    )
}