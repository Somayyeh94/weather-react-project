import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Search from "./Search";

function App() {
  let [unit, setUnit] = useState("celcius");
  function showUnit(event) {
    setUnit(event.target.value);

  }
  return (
    <div className="App">
      <div className="selection">
        <select className="unit-selection rounded-2" onChange={showUnit}>
          <option value="celcius">°C</option>
          <option value="fahrenheit">°F</option>
        </select>
      </div>
      <div>
        <Search tempUnit={unit} />
      </div>
      <footer className="text-white text-center">
        This project was coded by Somayyeh Seyedi and it is open-sourced on{" "}
        <a
          href="https://github.com/Somayyeh94/weather-react-project"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          GitHub
        </a>
      </footer>
    </div>
  );
}

export default App;
