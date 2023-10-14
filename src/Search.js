import React, { useState } from "react";
import "./Search.css";
import axios from "axios";
import Weather from "./Weather";
import ForecastStructure from "./ForecastStructure";


export default function Search({ defaultCity }) {
  const [city, setCity] = useState(defaultCity);
  const [weather, setWeather] = useState({ ready: false });

  function displayWeather(response) {
    console.log(response);

    setWeather({
      ready: true,
      temperature: Math.round(response.data.main.temp),
      city: response.data.name,
      wind: response.data.wind.speed,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    let apiKey = "8342a5044534040e24d2802ce4fcc6ac";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric `;
    axios.get(apiUrl).then(displayWeather);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }
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
      
    </div>
  );
}
