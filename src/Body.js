import React, { useState } from "react";
import "./Body.css";
import axios from "axios";
import Forecast from "./Forecast";
import { ThreeDots } from 'react-loader-spinner';
import FormattedDate from "./FormattedDate";

export default function Body(props) {
const [weatherData, setWeatherData] = useState({ loaded: false });

  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      loaded: true,
      date: new Date(response.data.time * 1000),
      city: response.data.city,
      temperature: Math.round(response.data.temperature.current),
      description: response.data.condition.description,
      imageUrl:
        "http://shecodes-assets.s3.amazonaws.com/api/weather/icons/clear-sky-day.png",
      feelsLike:  Math.round(response.data.temperature.feels_like),
      humidity: response.data.temperature.humidity,
      wind: Math.round(response.data.wind.speed)
    });
  

  }

 if (weatherData.loaded) {
  return (
    <div className="Body">
      <div className="Header">
        <form className="search">
          <i className="fa-solid fa-search search-icon"></i>
          <input
            className="search-input"
            placeholder=" Search for cities"
            type="text"
            name="searchCities"
            autoComplete="off"
          />
        </form>
        <button className="homeButton">
          <i className="fa-solid fa-house"></i>
        </button>
      </div>
      <div className="row main-info">
        <div className="col-md-2 col-sm-3 cityTemperatureNow">
          <div className="cityMain"> {weatherData.city}</div>
          <div className="temperatureMain">
            {weatherData.temperature}
            <div className="changeTemp">
              <div className="celciusTemp">°C</div>
              <div className="borderTemp">|</div>
              <div className="fahrenheitTemp">°F</div>
            </div>
          </div>
        </div>
        <div className="col-md-2 col-sm-3 weather-description">
          <img
            src={weatherData.imageUrl}
            alt={weatherData.description}
            className="weatherIcon"
          />
          <div className="temperature-status text-capitalize">{weatherData.description}</div>
        </div>

        <div className="col additional-info">
          <div className="feelsLike">feels like: {weatherData.feelsLike}°C</div>
          <div className="humidity">humidity: {weatherData.humidity}%</div>
          <div className="wind">wind: {weatherData.wind}km/h</div>
        </div>
      </div>
      <Forecast />
      <FormattedDate date={weatherData.date} />
    </div>
  );
 } else {
  const apiKey = "84a3odd1fb91cb0984343bb2db506t7f";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);
 }
 return (
  <div className="loader"> 
            <ThreeDots 
          height="80" 
          width="80" 
          radius="9"
          color="#858585" 
          ariaLabel="three-dots-loading"
          wrapperStyle={{}}
          wrapperClassName=""
          visible={true}
          />
 </div>
 );
  
}
