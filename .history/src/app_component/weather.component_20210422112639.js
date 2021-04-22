import React from "react";

const Weather = (props) => {
  return (
    <div className="container">
      <div className="cards pt-4">
        <h1 className="">{props.city}</h1>
        <h5 className="py-4">
          <i
            className={`wi weather-icon ${props.weatherIcon} display-4 mt-3`}
          ></i>
        </h5>

        <h1 className="temperature py-0 ">{props.temp_celsius}</h1>

        <div className="">
          <h3 className="py-2">{props.description}</h3>
          <h6 className="py-0 mt-0">{props.wind}</h6>
          <h6 className="py-0">{props.visibility}</h6>
        </div>

        <div className="forecast-wrapper">
          <div className="d-flex flex-row justify-content-around mt-3">
            <div className="d-flex flex-column forecast">
              <h6 className="py-0">{props.tomorrow}</h6>
              <h6 className="py-0">{props.temp_celsius_tomorrow}</h6>
              <h6 className="py-0">{props.wind_tomorrow}</h6>
              <h6 className="py-0">{props.description_tomorrow}</h6>
            </div>

            <div className="d-flex flex-column forecast">
              <u><h6 className="py-0">{props.aftertomorrow}</h6></u>
              <h6 className="py-0">{props.temp_celsius_aftertomorrow}</h6>
              <h6 className="py-0">{props.wind_aftertomorrow}</h6>
              <h6 className="py-0">{props.description_aftertomorrow}</h6>
            </div>

            <div className="d-flex flex-column forecast">
              <h6 className="py-0">{props.afteraftertomorrow}</h6>
              <h6 className="py-0">{props.temp_celsius_afteraftertomorrow}</h6>
              <h6 className="py-0">{props.wind_afteraftertomorrow}</h6>
              <h6 className="py-0">{props.description_afteraftertomorrow}</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
