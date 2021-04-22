import React from "react";

const Weather = (props) => {
  return (
    <div className="container">
      <div className="cards pt-4">
        <h2>{props.city}</h2>
        <h1 className="py-4">
          <i className={`wi ${props.weatherIcon} display-4 mt-3`}></i>
        </h1>

        <h1 className="py-0">{props.temp_celsius}</h1>
        <h1 className="py-4">{props.description}</h1>

        <h1 className="py-0 mt-0">{props.wind}</h1>

        <h1 className="py-0">{props.visibility}</h1>

        <div className="forecast-wrapper">
          <div className="d-flex flex-row justify-content-around mt-3">
            <div className="d-flex flex-column forecast">
              <h1 className="py-0">{props.tomorrow}</h1>
              <h1 className="py-0">{props.temp_celsius_tomorrow}</h1>
              <h1 className="py-0">{props.wind_tomorrow}</h1>
              <h1 className="py-0">{props.description_tomorrow}</h1>
            </div>

            <div className="d-flex flex-column forecast">
              <h1 className="py-0">{props.aftertomorrow}</h1>
              <h1 className="py-0">
                {props.temp_celsius_aftertomorrow}
              </h1>
              <h1 className="py-0">{props.wind_aftertomorrow}</h1>
              <h1 className="py-0">
                {props.description_aftertomorrow}
              </h1>
            </div>

            <div className="d-flex flex-column forecast">
              <h1 className="py-0">{props.afteraftertomorrow}</h1>
              <h1 className="py-0">
                {props.temp_celsius_afteraftertomorrow}
              </h1>
              <h1 className="py-0">
                {props.wind_afteraftertomorrow}
              </h1>
              <h1 className="py-0">
                {props.description_afteraftertomorrow}
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

function minmaxTemp(min, max) {
  if (min || max) {
    return (
      <h1>
        <span className="px-4">{min}</span> -
        <span className="px-4">{max}</span>
      </h1>
    );
  }
}

export default Weather;
