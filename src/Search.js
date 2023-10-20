import React, { useState } from "react";
import "./Search.css";
import axios from "axios";
import Weather from "./Weather";
import ForecastStructure from "./ForecastStructure";
import Forecast from "./Forecast";

export default function Search({ defaultCity }) {
  const [city, setCity] = useState(defaultCity);
  const [weather, setWeather] = useState({ ready: false });

  function displayWeather(response) {
      setWeather({
      ready: true,
      temperature: Math.round(response.data.temperature.current),
      city: response.data.city,
      wind: response.data.wind.speed,
      description: response.data.condition.description,
      humidity: response.data.temperature.humidity,
      time: response.data.time,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    WeatherApiCall();
  }

  function WeatherApiCall() {
    let apiKey = "2c13e0a2b6fe347b0421bb02eef2o43t";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayWeather);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  if (weather.ready) {
    return (
      <div className="Search">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city name..."
                className="form-control"
                onChange={updateCity}
              />
            </div>
            <div className="col-3">
              <button className="btn btn-primary w-100">Search</button>
            </div>
          </div>
        </form>
        <Weather
          temperature={weather.temperature}
          humidity={weather.humidity}
          description={weather.description}
          wind={weather.wind}
          city={weather.city}
        />
        <ForecastStructure />
        <Forecast city={weather.city} time={weather.time} />
      </div>
    );
  } else {
    WeatherApiCall();
    return <p>Loading</p>;
  }
}
