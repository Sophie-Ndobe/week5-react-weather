import React, { useState } from "react";

export default function ForecastStructure(props) {
  const [forecast, setForecast] = useState(" ");

  function displayWeatherForecast(response) {
    setForecast({
      tempMin1: Math.round(response.data.daily[0].temperature.minimum),
      tempMax1: Math.round(response.data.daily[0].temperature.maximum),
      icon1: response.data.daily[0].condition.icon,
      time1: response.data.daily[0].time,
      tempMin2: Math.round(response.data.daily[1].temperature.minimum),
      tempMax2: Math.round(response.data.daily[1].temperature.maximum),
      icon2: response.data.daily[1].condition.icon,
      time2: response.data.daily[1].time,
      tempMin3: Math.round(response.data.daily[2].temperature.minimum),
      tempMax3: Math.round(response.data.daily[2].temperature.maximum),
      icon3: response.data.daily[2].condition.icon,
      time3: response.data.daily[2].time,
      tempMin4: Math.round(response.data.daily[3].temperature.minimum),
      tempMax4: Math.round(response.data.daily[3].temperature.maximum),
      icon4: response.data.daily[3].condition.icon,
      time4: response.data.daily[3].time,
      tempMin5: Math.round(response.data.daily[4].temperature.minimum),
      tempMax5: Math.round(response.data.daily[4].temperature.maximum),
      icon5: response.data.daily[4].condition.icon,
      time5: response.data.daily[4].time,
    });
  }

  function forecastApiCall() {
    let apiKey = "2c13e0a2b6fe347b0421bb02eef2o43t";
    let forecastApiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${props.city}&key=${apiKey}&units=metric`;
    axios.get(forecastApiUrl).then(displayWeatherForecast);
  }

  function day() {
    let date = new Date();
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
  }
  return (
    <div className="ForecastStructure mt-4">
      <p>{day()}</p>
      <img
        src="https://ssl.gstatic.com/onebox/weather/64/rain.png"
        alt="rain icon"
      />
      <p>
        {forecast.tempMax1}25°{forecast.tempMin1} 15°
      </p>
    </div>
  );
}
