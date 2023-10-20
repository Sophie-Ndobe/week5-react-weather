import React, { useState } from "react";

export default function Forecast(props) {
  const [forecast, setForecast] = useState({ ready: false });

  function day(time) {
    let date = new Date(props.time * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sun"];

    return days[day];
  }

  // let days = day();

  let days = ["Sun", "Mon", "Tue", "Wed", "Thu"];

  if (forecast.ready) {
    return (
      <div className="Forecast">
        <div className="row">
          {days.map(function (day, index) {
            return (
              <div className="col" key={index}>
                {day}
              </div>
            );
          })}
        </div>
      </div>
    );
  } else {
    return null;
  }
}
