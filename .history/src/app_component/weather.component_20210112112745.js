import React from 'react';

const Weather = (props) => {
    return(
    <div className="container">
    <div className="cards pt-4">
        <h1>{props.city}</h1>
        <h5 className="py-4">
        <i className={`wi ${props.weatherIcon} display-1  mt-2`}></i>
        </h5>

        <h1 className="py-2">{props.temp_celsius}</h1>
        {minmaxTemp(props.temp_min, props.temp_max)}

        <h5 className="py-3">{props.wind}</h5>

        <h3 className="py-3">{props.description}</h3>
    </div>
    </div>
    )
}

function minmaxTemp(min, max){
    if(min || max){
        return(
        <h5>
            <span className="px-4">{min}</span> -
            <span className="px-4">{max}</span>
        </h5>
    );
    }
}



export default Weather;