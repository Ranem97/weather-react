import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="row">
        <div className="col-6 text-capitalize">
          <h1>{props.data.city}</h1>
          <h5>
            <FormattedDate date={props.data.date} />
          </h5>
          <img
            src="https://assets.msn.com/bundles/v1/weather/latest/PartlyCloudyDayV3.svg"
            alt="weather icon"
          />
          <h3>{props.data.description}</h3>
        </div>
        <div className="col-6">
          <div className="temperature">
            <span className="temp">{Math.round(props.data.temperature)}</span>
            <span className="unit">°</span>
          </div>
          <div className="min-max">
            <span className="max">{Math.round(props.data.max)}°</span>/
            <span className="min">{Math.round(props.data.min)}°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
