import React from 'react';

const Weather = (props) => {
    return(
    <div className="container">
    <div className="cards">
        <h1>{props.city}, {props.country}</h1>
        <h5 className="py-4">
        <i className={`wi ${props.weatherIcon} display-1`}></i>
        </h5>
        <h1 className="py-2">{props.temp_celsius}&deg;</h1>
        {minmaxTemp(props.temp_min, props.temp_max)}

        <h4 className="py-3">{props.description}</h4>
    </div>
    </div>
    )
}

function minmaxTemp(min, max){
    return(
        <h3>
            <div className="px-4">{min}&deg;</div> -
            <div className="px-4">{max}&deg;</div>
        </h3>
    )
}

export default Weather;