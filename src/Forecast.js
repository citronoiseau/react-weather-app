import React, { useState, useEffect } from "react";
import axios from "axios";
import ForecastDay from "./ForecastDay";
import Loader from "./Loader";
export default function Forecast({ coord, unit }) {
  let [forecast, setForecast] = useState(null);
  let [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(false);
  }, [coord]);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }
  if (loaded) {
    return (
      <div className="Forecast">
        <div className="card-group week-forecast">
          {forecast.map(function (dailyForecast, index) {
            if (index < 5) {
              return (
                <div className="card text-center mb-3 border-0" key={index}>
                  <ForecastDay data={dailyForecast} unit={unit} />
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    );
  } else {
    const apiKey = "84a3odd1fb91cb0984343bb2db506t7f";
    let longitude = coord.longitude;
    let latitude = coord.latitude;
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${longitude}&lat=${latitude}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
    return <Loader />;
  }
}
