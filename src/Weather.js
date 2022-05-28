import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
import React, { useState } from "react";
import "./Weather.css";

export default function Weather() {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      city: response.data.name,
      temperature: response.data.main.temp,
      min: response.data.main.temp_min,
      max: response.data.main.temp_max,
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      date: "September 25,2015",
    });
  }
  if (weatherData.ready) {
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
            <div className="col-6 text-capitalize">
              <h1>{weatherData.city}</h1>
              <h5>{weatherData.date}</h5>
              <img
                src="https://assets.msn.com/bundles/v1/weather/latest/PartlyCloudyDayV3.svg"
                alt="weather icon"
              />
              <h3>{weatherData.description}</h3>
            </div>
            <div className="col-6">
              <div className="temperature">
                <span className="temp">
                  {Math.round(weatherData.temperature)}
                </span>
                <span className="unit">°</span>
              </div>
              <div className="min-max">
                <span className="max">{Math.round(weatherData.max)}°</span>/
                <span className="min">{Math.round(weatherData.min)}°</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    let city = "London";
    const apiKey = "471199509cdac03b1fbb7909b6351612";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
