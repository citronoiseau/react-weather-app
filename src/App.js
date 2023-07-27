import './App.css';
import Body from "./Body";
import Forecast from "./Forecast";
import Footer from "./Footer";
import Time from "./Time";

export default function App() {
  return (
    <div className="App">
    <div className=" container">
      <Body />
      <Forecast />
      <Time />
    </div>
    <div className="footer">
        <Footer />
      </div>
  </div>
  );
}


