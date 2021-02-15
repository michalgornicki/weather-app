import React from 'react';

const Weather = (props) => {
    return(
    <div className="container">
    <div className="cards pt-4">
        <h1>{props.city}</h1>
        <h5 className="py-4">
        <i className={`wi ${props.weatherIcon} display-1 mt-3`}></i>
        </h5>
        
        <h1 className="py-2">{props.temp_celsius}</h1>
        <h2 className="py-4">{props.description}</h2>

        
        {minmaxTemp(props.temp_min, props.temp_max)}

        <h5 className="py-0 mt-3">{props.wind}</h5>

        <h5 className="py-0 mt-3">{props.visibility}</h5>


        <div className="d-flex flex-row justify-content-around">
        <div className="d-flex flex-column forecast">
        <h6 className="py-0">{props.tomorrow}</h6>
        <h6 className="py-0">{props.temp_celsius_tomorrow}</h6>
        <h6 className="py-0">{props.wind_tomorrow}</h6>
        <h6 className="py-0">{props.description_tomorrow}</h6>
        </div>

        <div className="d-flex flex-column forecast">
        <h6 className="py-0">{props.aftertomorrow}</h6>
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