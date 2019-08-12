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
        Temprature in degree celsius :
        <span className="weather__value">{props.temprature - 273.0}</span>
      </p>
    )}

    {props.Humidity && (
      <p className="weather__key">
        Humidity: <span className="weather__value">{props.Humidity}</span>{" "}
      </p>
    )}
    {props.description && (
      <p className="weather__key">
        Description:<span className="weather__value">{props.description}</span>
      </p>
    )}
    {props.error && <p className="weather__error">{props.error}</p>}
  </div>
);
export default Weather;
