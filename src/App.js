import "./Body.css";
import Body from "./Body";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="App">
      <div className=" container">
        <Body defaultCity="Kharkiv" />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}
