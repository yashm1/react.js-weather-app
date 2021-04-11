import React from "react";
const Weather = props => (
  <div className="weather__info">
    {props.city && props.country && (
      <p className="weather__key">
        Loctaion :
        <span className="weather__value">
          {props.city},{props.country}
        </span>
      </p>
    )}
    {props.temprature && (
      <p className="weather__key">
        Temprature  :  
        <span className="weather__value">{' '+(Math.floor(props.temprature) - 273).toString()+'°C'}</span>
      </p>
    )}

    {props.Humidity && (
      <p className="weather__key">
        Humidity: <span className="weather__value">{(props.Humidity).toString() + ' gm⁻³'}</span>{" "}
      </p>
    )}
    {props.description && (
      <p className="weather__key">
        Description : <span className="weather__value">{props.description}</span>
      </p>
    )}
    {props.error && <p className="weather__error">{props.error}</p>}
  </div>
);
export default Weather;
