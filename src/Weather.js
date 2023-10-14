import React from "react";
import "./Weather.css";

export default function Weather(props) {
  let date = new Date();

  let hours = date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }

  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

let day = days[date.getDay()];

  return (
    <div className="Weather mt-5">
      <div className="row">
        <div className="col-6">
          <h1>{props.city}</h1>
          <ul>
            <li>{day} {hours}:{minutes}, {props.description}</li>
            <li>
              Humidity: <strong>{props.humidity}%</strong>, Wind{" "}
              <strong>{props.wind}km/h</strong>
            </li>
          </ul>
        </div>
        <div className="col-6">
          <div className="d-flex justify-content-end temperatureDetails">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
              alt="partly cloudy icon"
            />
            <span className="temperature">{props.temperature}</span>
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
