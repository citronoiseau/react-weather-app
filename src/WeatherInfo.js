import React from "react";
import WeatherTemperature from "./WeatherTemperature"

export default function WeatherInfo(props) {
    return (
        <div className="row main-info">
        <div className="col-md-2 col-sm-3 cityTemperatureNow">
          <div className="cityMain"> {props.data.city}</div>
          <WeatherTemperature  celsius={props.data.temperature}/>
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