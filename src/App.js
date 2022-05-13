import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div class="container">
        <div class="card mt-5">
          <div class="card-body">
            <form id="search-form">
              <div class="d-flex justify-content-evenly">
                <div>
                  <input
                    type="search "
                    placeholder="Search"
                    class="form-control"
                    id="search-bar"
                    autofocus
                    autocomplete="off"
                  />
                </div>
                <div>
                  <input type="submit" value="🔍" class="btn btn-light" />
                </div>
              </div>
            </form>
            <div class="row m-3 information">
              <div class="col-4 weather-info">
                <ul>
                  <li id="city-name"></li>
                  <li id="day-and-time"></li>
                  <li id="description"></li>
                </ul>
              </div>
              <div class="col-4 weather-info clearfix">
                <img src="" id="icon" />
                <br />
                <span class="temp"></span>
                <a class="temp-symbol">°C </a>
                <span class="brder-symbol"> |</span>
                <a class="Fehrnhit-symbol"> °F </a>
              </div>
              <div class="col-4 weather-info">
                <ul>
                  <li id="pressure"></li>
                  <li id="humidity"></li>
                  <li id="wind"></li>
                </ul>
              </div>
            </div>
            <div class="futur-days" id="forcast"></div>
          </div>
        </div>

        <span>
          <a href="https://github.com/Ranem97/weather-app-final" id="git-url">
            Open-Source Code{" "}
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
