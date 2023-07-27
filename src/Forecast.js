import "./Forecast.css";
export default function Forecast() {
  return (
    <div className="Forecast">
      <div className="card-group week-forecast">
        <div className="card text-center mb-3 border-0">
          <div className="card-body">
            <div className="card-title weekday"> Mon </div>
            <img
              src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/few-clouds-day.png"
              alt="Icon"
              className="forecastIcon"
            />
            <p className="card-text temperature">
              20° <span className="minTemperature"> 18°</span>
            </p>
          </div>
        </div>
        <div className="card text-center mb-3 border-0">
          <div className="card-body">
            <div className="card-title weekday"> Tue </div>
            <img
              src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/few-clouds-day.png"
              alt="Icon"
              className="forecastIcon"
            />
            <p className="card-text temperature">
              20° <span className="minTemperature"> 18°</span>
            </p>
          </div>
        </div>
        <div className="card text-center mb-3 border-0">
          <div className="card-body">
            <div className="card-title weekday"> Wed </div>
            <img
              src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/few-clouds-day.png"
              alt="Icon"
              className="forecastIcon"
            />
            <p className="card-text temperature">
              20° <span className="minTemperature"> 18°</span>
            </p>
          </div>
        </div>
        <div className="card text-center mb-3 border-0">
          <div className="card-body">
            <div className="card-title weekday"> Thu </div>
            <img
              src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/few-clouds-day.png"
              alt="Icon"
              className="forecastIcon"
            />
            <p className="card-text temperature">
              20° <span className="minTemperature"> 18°</span>
            </p>
          </div>
        </div>
        <div className="card text-center mb-3 border-0">
          <div className="card-body">
            <div className="card-title weekday"> Fri </div>
            <img
              src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/few-clouds-day.png"
              alt="Icon"
              className="forecastIcon"
            />
            <p className="card-text temperature">
              20° <span className="minTemperature"> 18°</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
