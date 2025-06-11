import react from "react";
import "./Search.css";
import logo from"./pin-48.svg"
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
      <div className="location ms-3 text-white mt-4 ps-3 "><img src={logo} alt="location-icon" width="20px" className="pb-2"/> Mashhad, Iran</div>
      <div className="weather-data m-3 mt-1 rounded-3 text-white p-2">
        <p className="current-text">Current weather</p>
        <p className="date">wendsday, 23:05</p>
        <div className="current-data d-flex justify-content-center">
          <div className="current-icon  ">
            <img
              src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/clear-sky-day.png"
              alt="icon"
              className="img-fluid"
            />
          </div>
          <div className="current-temperature">
            <span className="temperature-value">19</span>{" "}
            <span className="temperaure-unit ">°C</span>
          </div>
          <div className="current-condition pt-3 ps-4">
            <div className="current-description fw-bold">Mostly cloudy</div>
            <div className="current-feel-like">Feels like 17°</div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row weather-properties text-center grid">
            <div className=" col-lg-2 col-md-4 grid-item border rounded-2">
              Air quality <br /> 94
            </div>
            <div className=" col-lg-2 col-md-4 grid-item border rounded-2">
              Wind <br /> 8km/h
            </div>
            <div className=" col-lg-2 col-md-4 grid-item border rounded-2">
              Humidity
              <br /> 63%
            </div>
            <div className="col-lg-2 col-md-4 grid-item border rounded-2">
              Visibility
              <br />
              12km
            </div>
            <div className="col-lg-2 col-md-4 grid-item border rounded-2">
              Pressure
              <br />
              1010mb
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
