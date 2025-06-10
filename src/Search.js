import react from "react";
import "./Search.css";
export default function Search() {
  return (
    <div className="Search container">
      <form className="text-center">
        <input
          type="search"
          placeholder="Type a Location..."
          className="form-search border border-2 rounded-2 p-1"
        />
        <input
          type="submit"
          value="Search"
          className="form-submit border border-2 rounded-2 ms-2 p-1 fw-bold"
        />
      </form>
      <div className="weather-data m-3 rounded-3 text-white p-2">
        <p className="current-text">Current weather</p>
        <p className="date">wendsday, 23:05</p>
        <div className="current-data d-flex justify-content-center">
          <div className="current-icon  ">
            <img
              src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/clear-sky-day.png"
              alt="icon"
            />
          </div>
          <div className="current-temperature">
            <span className="temperature-value">19</span>{" "}
            <span className="temperaure-unit ">°C</span>
          </div>
          <div className="current-description pt-3 ps-4">
            <div className="current-description fw-bold">Mostly cloudy</div>
            <div className="current-feel-like">Feels like 17°</div>
          </div>
        </div>
        <div className="row justify-content-evenly weather-properties text-center">
          <div className="col-lg-2 col-md-4 ">
            Air quality <br /> 94
          </div>
          <div className="col-lg-2 col-md-4 ">
            Wind <br /> 8km/h
          </div>
          <div className="col-lg-2 col-md-4 ">
            Humidity
            <br /> 63%
          </div>
          <div className="col-lg-2 col-md-4 ">
            Visibility
            <br />
            12km
          </div>
          <div className="col-lg-2 col-md-4 ">
            Pressure
            <br />
            1010mb
          </div>
          <div className="col-lg-2 col-md-4  ">
            Dev point
            <br />
            12°
          </div>
        </div>
      </div>
    </div>
  );
}
