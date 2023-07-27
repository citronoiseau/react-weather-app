import "./Body.css";
export default function Body() {
  let weatherData = {
    city: "Kharkiv",
    temperature: 20,
    description: "Clear Sky",
    imageUrl:
      "http://shecodes-assets.s3.amazonaws.com/api/weather/icons/clear-sky-day.png",
    feelsLike: 22,
    humidity: 80,
    wind: 2
  };
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
          <div className="temperature-status">{weatherData.description}</div>
        </div>

        <div className="col additional-info">
          <div className="feelsLike">feels like: {weatherData.feelsLike}°C</div>
          <div className="humidity">humidity: {weatherData.humidity}%</div>
          <div className="wind">wind: {weatherData.wind}km/h</div>
        </div>
      </div>
    </div>
  );
}
