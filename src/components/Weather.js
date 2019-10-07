import React from 'react';

const Weather = function(props) {

  return (
    <div className="widget">
      <img className="icon" src={"http://openweathermap.org/img/wn/"+props.data.icon+"@2x.png"} />
      <div className="temperature">
      {props.data.temperature}°C
        <span className="tempf">/ {Math.round(props.data.temperature*9/5 + 32)}°F</span>
      </div>
      <div className="city">{props.data.city}</div>
      <p className="description">{props.data.description}</p>
      <div className="details">Wind {props.data.wind} km/h</div>
    </div>
    );
}

export default Weather;
