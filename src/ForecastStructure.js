import React from "react";

export default function ForecastStructure() {
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
      <p>25° 15°</p>
      
    </div>

  );
}
