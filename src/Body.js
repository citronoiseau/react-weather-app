import React, { useState, useEffect } from "react";
import "./Body.css";
import axios from "axios";
import Loader from "./Loader";
import FormattedDate from "./FormattedDate";
import WeatherInfo from "./WeatherInfo";
import Forecast from "./Forecast";

export default function Body(props) {
  const [weatherData, setWeatherData] = useState({ loaded: false });
  const [city, setCity] = useState(() => {
    const cityFromStorage = localStorage.getItem("city");
    console.log(cityFromStorage);
    if (cityFromStorage) {
      return cityFromStorage;
    } else {
      return props.defaultCity;
    }
  });
  const [unit, setUnit] = useState(() => {
    const unitFromStorage = localStorage.getItem("unit");
    console.log(unitFromStorage);
    if (unitFromStorage) {
      return unitFromStorage;
    } else {
      return "celsius";
    }
  });
  useEffect(() => {
    localStorage.setItem("city", city);
  }, [city]);

  useEffect(() => {
    localStorage.setItem("unit", unit);
  }, [unit]);

  function handleResponse(response) {
    if (response.data.status === "not_found") {
      alert("This city does not exist!😭");
      return false;
    } else {
      setCity(response.data.city);
      setWeatherData({
        loaded: true,
        date: new Date(response.data.time * 1000),
        city: response.data.city,
        temperature: Math.round(response.data.temperature.current),
        description: response.data.condition.description,
        imageUrl: `http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${response.data.condition.icon}.png`,
        feelsLike: Math.round(response.data.temperature.feels_like),
        humidity: response.data.temperature.humidity,
        wind: Math.round(response.data.wind.speed),
        coordinates: response.data.coordinates,
      });
    }
  }
  function search() {
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
  function handleLocation(event) {
    event.preventDefault();
    showLocation();
  }
  function showLocation() {
    navigator.geolocation.getCurrentPosition(showPosition);
  }
  function showPosition(position) {
    let apiKey = "84a3odd1fb91cb0984343bb2db506t7f";
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;
    let apiUrl = `https://api.shecodes.io/weather/v1/current?lat=${lat}&lon=${lon}&key=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);
  }

  if (weatherData.loaded) {
    return (
      <div className="Body">
        <div className="Header">
          <form onSubmit={handleSubmit} className="search">
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
          <button className="homeButton" type="button" onClick={handleLocation}>
            <i className="fa-solid fa-house"></i>
          </button>
        </div>
        <WeatherInfo data={weatherData} unit={unit} setUnit={setUnit} />
        <Forecast coord={weatherData.coordinates} unit={unit} />
        <FormattedDate date={weatherData.date} />
      </div>
    );
  } else {
    search();
    return <Loader />;
  }
}
