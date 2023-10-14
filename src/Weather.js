import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather mt-5">
      <div className="row">
        <div className="col-6">
          <h1>Cape Town</h1>
          <ul>
            <li>Saturday 13:17, broken clouds</li>
            <li>
              Humidity: <strong>79%</strong>, Wind <strong>1.34km/h</strong>
            </li>
          </ul>
        </div>
        <div className="col-6">
          <div className="d-flex justify-content-end temperatureDetails">
            <img src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png" />
            <span className="temperature">15</span>
            <span className="units">
              <span>
                <a href="/" className="celciusUnit">
                  °C{" "}
                </a>
                |{" "}
                <a href="/" className="fahrenheitUnit">
                  °F
                </a>
              </span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
