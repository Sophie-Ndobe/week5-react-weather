import React from "react";
import ForecastStructure from "./ForecastStructure";

export default function Forecast(props) {
  
  return (
    <div className="Forecast">
      <ForecastStructure city={props.city}/>
      
    </div>
  );
}
