import "./Forecast.css";
import axios from "axios";
export default function Forecast(props) {
  console.log(props);

  function handleResponse(response) {
     console.log(response);
  }
  const apiKey="84a3odd1fb91cb0984343bb2db506t7f";
  let longitude = props.coord.longitude;
  let latitude = props.coord.latitude;
  let apiUrl=`https://api.shecodes.io/weather/v1/forecast?lon=${longitude}&lat=${latitude}&key=${apiKey}`;
  axios.get(apiUrl).then(handleResponse);


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
        </div>
      </div>
  );
}
