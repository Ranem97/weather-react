import "./App.css";
import React from "react";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="card mt-5">
          <div className="card-body">
            <form id="search-form">
              <div className="d-flex justify-content-evenly">
                <div>
                  <input
                    type="search "
                    placeholder="Search"
                    className="form-control"
                    id="search-bar"
                    autoFocus
                    autoComplete="off"
                  />
                </div>
                <div>
                  <input type="submit" value="🔍" className="btn btn-light" />
                </div>
              </div>
            </form>
            <div className="row m-3 information">
              <div className="col-4 weather-info">
                <ul>
                  <li id="city-name"></li>
                  <li id="day-and-time"></li>
                  <li id="description"></li>
                </ul>
              </div>
              <div className="col-4 weather-info clearfix">
                <img src="" id="icon" alt="" />
                <br />
                <span className="temp"></span>
                <a className="temp-symbol">°C </a>
                <span className="brder-symbol"> |</span>
                <a className="Fehrnhit-symbol"> °F </a>
              </div>
              <div className="col-4 weather-info">
                <ul>
                  <li id="pressure"></li>
                  <li id="humidity"></li>
                  <li id="wind"></li>
                </ul>
              </div>
            </div>
            <div className="futur-days" id="forcast"></div>
          </div>
        </div>

        <span>
          <a href="https://github.com/Ranem97/weather-app-final" id="git-url">
            Open-Source Code
          </a>
        </span>
        <span id="author">
          <p>by Ranem Haffar</p>
        </span>
      </div>
    </div>
  );
}

export default App;
