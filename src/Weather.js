import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <div className="container">
        <form>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city.."
                className="form-control"
              />
            </div>
            <div className="col-3">
              <input type="submit" value="Search" className="btn btn-primary" />
            </div>
          </div>
        </form>
        <div className="row">
          <div className="col-6">
            <h1>San Francisco</h1>
            <h3>September 25,2015</h3>
            <img
              src="https://assets.msn.com/bundles/v1/weather/latest/PartlyCloudyDayV3.svg"
              alt="weather icon"
            />
            <h2>Cloudy</h2>
          </div>
          <div className="col-6">
            <div>72°</div>
            <div>81°/57°</div>
          </div>
        </div>
      </div>
      <footer>
        <span>
          <a href="https://github.com/Ranem97/weather-react" id="git-url">
            Open-Source Code
          </a>
        </span>
        <span id="author">
          <p>by Ranem Haffar</p>
        </span>
      </footer>
    </div>
  );
}
