import React, { useState } from "react";

export default function WeatherTemperature(props) { 
    const [unit, setUnit] = useState("celsius");
    function showFahrenheit(event) {
        event.preventDefault();
        setUnit("fahrenheit")

    }
    function showCelsius(event) {
        event.preventDefault();
        setUnit("celsius")

    }
    if (unit === "celsius") {
        return (
            <div className="temperatureMain">
            {props.celsius}
            <div className="changeTemp">
              <div className="celciusTemp"> °C </div>
              <div className="borderTemp">|</div>
              <div className="fahrenheitTemp"><a href="/" onClick={showFahrenheit}>°F</a></div>
            </div>
          </div>
        );
    } else {
        let fahrenheit = (props.celsius * 9)/ 5 +32;
        return (
            <div className="temperatureMain">
            {Math.round(fahrenheit)}
            <div className="changeTemp">
              <div className="celciusTemp"> <a href="/" onClick={showCelsius}>°C</a> </div>
              <div className="borderTemp">|</div>
              <div className="fahrenheitTemp">°F</div>
            </div>
          </div>
        );
    }

}