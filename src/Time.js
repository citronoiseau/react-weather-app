import "./Time.css";
export default function Time() {
  let weatherData = {
    date: "18th of August, Tue, 13:20"
  };
  return (
    <div className="Time">
      <div className="timeNow">Last updated at: {weatherData.date}</div>
    </div>
  );
}