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
                autoFocus="on"
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary w-100"
              />
            </div>
          </div>
        </form>
        <div className="row">
          <div className="col-6">
            <h1>San Francisco</h1>
            <h5>September 25,2015</h5>
            <img
              src="https://assets.msn.com/bundles/v1/weather/latest/PartlyCloudyDayV3.svg"
              alt="weather icon"
            />
            <h3>Cloudy</h3>
          </div>
          <div className="col-6">
            <div className="temperature">
              <span className="temp">72</span>
              <span className="unit">°</span>
            </div>
            <div className="min-max">
              <span className="max">81°</span>/<span className="min">57°</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
