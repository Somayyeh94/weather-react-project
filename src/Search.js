import { useState } from "react";
import "./Search.css";
import logo from "./pin-48.svg";
import axios from "axios";



export default function Search() {
  let [city, setCity] = useState("");
  let [weather, setWeather] = useState({});
  function getWeatherData(response) {
  console.log(response.data)
    setWeather({
      temperature: Math.round(response.data.temperature.current),
      humidity: response.data.temperature.humidity,
      feels_like: Math.round(response.data.temperature.feels_like),
      pressure: response.data.temperature.pressure,
      wind: Math.round(response.data.wind.speed),
      description: response.data.condition.description,
      city: response.data.city,
      country: response.data.country,
      icon: response.data.condition.icon_url,
      time: response.data.time * 1000,
    });
  }

  function getApi(event) {
    event.preventDefault();
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=71c9o8ef0370bd39a326b41301fb04bt`;
    axios.get(apiUrl).then(getWeatherData);
  }
  function getCity(event) {
    setCity(event.target.value);
  }
  return (
    <div className="Search container">
      <form className="text-center" onSubmit={getApi}>
        <input
          type="search"
          placeholder="Type a Location..."
          className="form-search border border-2 rounded-2 p-1"
          onChange={getCity}
        />
        <input
          type="submit"
          value="Search"
          className="form-submit border border-2 rounded-2 ms-2 p-1 fw-bold"
        />
      </form>
      <div className="location ms-3 text-white mt-4 ps-3 ">
        <img src={logo} alt="location-icon" width="20px" className="pb-2" />{" "}
        {weather.city}, {weather.country}
      </div>
      <div className="weather-data m-3 mt-1 rounded-3 text-white p-2">
        <p className="current-text">Current weather</p>
        <p className="date">wendsday, 23:05</p>
        <div className="current-data d-flex justify-content-center">
          <div className="current-icon  ">
            <img src={weather.icon} alt="icon" className="img-fluid" />
          </div>
          <div className="current-temperature ">
            <span className="temperature-value">{weather.temperature}</span>{" "}
            <span className="temperaure-unit ">°C</span>
          </div>
          <div className="current-condition pt-3 ps-4">
            <div className="current-description fw-bold">
              {weather.description}
            </div>
            <div className="current-feel-like">
              Feels like {weather.feels_like}°
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row weather-properties text-center grid">
            <div className=" col-lg-2 col-md-4 grid-item border rounded-2">
              Air quality <br /> 94
            </div>
            <div className=" col-lg-2 col-md-4 grid-item border rounded-2">
              Wind <br /> {weather.wind}km/h
            </div>
            <div className=" col-lg-2 col-md-4 grid-item border rounded-2">
              Humidity
              <br /> {weather.humidity}%
            </div>
            <div className="col-lg-2 col-md-4 grid-item border rounded-2">
              Visibility
              <br />
              12km
            </div>
            <div className="col-lg-2 col-md-4 grid-item border rounded-2">
              Pressure
              <br />
              {weather.pressure}mb
            </div>
            <div className=" col-lg-2 col-md-4 grid-item border rounded-2 ">
              Dev point
              <br />
              12°
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
