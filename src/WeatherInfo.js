import React from "react";

export default function WeatherInfo(props) {
    return (
        <div className="row main-info">
        <div className="col-md-2 col-sm-3 cityTemperatureNow">
          <div className="cityMain"> {props.data.city}</div>
          <div className="temperatureMain">
            {props.data.temperature}
            <div className="changeTemp">
              <div className="celciusTemp">°C</div>
              <div className="borderTemp">|</div>
              <div className="fahrenheitTemp">°F</div>
            </div>
          </div>
        </div>
        <div className="col-md-2 col-sm-3 weather-description">
          <img
            src={props.data.imageUrl}
            alt={props.data.description}
            className="weatherIcon"
          />
          <div className="temperature-status text-capitalize">{props.data.description}</div>
        </div>

        <div className="col additional-info">
          <div className="feelsLike">feels like: {props.data.feelsLike}°C</div>
          <div className="humidity">humidity: {props.data.humidity}%</div>
          <div className="wind">wind: {props.data.wind}km/h</div>
        </div>
      </div>
    );

}