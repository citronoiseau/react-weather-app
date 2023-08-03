import React, { useState } from "react";
import "./Body.css";
import axios from "axios";
import Forecast from "./Forecast";
import { ThreeDots } from 'react-loader-spinner';
import FormattedDate from "./FormattedDate";
import WeatherInfo from "./WeatherInfo"

export default function Body(props) {
const [weatherData, setWeatherData] = useState({ loaded: false });
const [city, setCity] = useState(props.defaultCity)

  function handleResponse(response) {
    if (response.data.status === "not_found") {
      alert("This city does not exist!😭");
      return false;
    } else {
      setWeatherData({
        loaded: true,
        date: new Date(response.data.time * 1000),
        city: response.data.city,
        temperature: Math.round(response.data.temperature.current),
        description: response.data.condition.description,
        imageUrl: `http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${response.data.condition.icon}.png`,
        feelsLike:  Math.round(response.data.temperature.feels_like),
        humidity: response.data.temperature.humidity,
        wind: Math.round(response.data.wind.speed)
      });
    }
    console.log(response.data);
 
  }
function search () {
  const apiKey = "84a3odd1fb91cb0984343bb2db506t7f";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);
}

  function handleSubmit(event) {
  event.preventDefault();

  search();

  }

  function handleCityChange(event) {
  setCity(event.target.value.trim());

  }

 if (weatherData.loaded) {
  return (
    <div className="Body">
      <div className="Header">
        <form  onSubmit={handleSubmit} className="search" >
          <i className="fa-solid fa-search search-icon"></i>
          <input
            className="search-input"
            placeholder=" Search for cities"
            type="text"
            name="searchCities"
            autoComplete="off"
            onChange={handleCityChange}
          />
        </form>
        <button className="homeButton">
          <i className="fa-solid fa-house"></i>
        </button>
      </div>
      <WeatherInfo data={weatherData} />
      <Forecast />
      <FormattedDate date={weatherData.date} />
    </div>
  );
 } else {
  search ()
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

  
}
