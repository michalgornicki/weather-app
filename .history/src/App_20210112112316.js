import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'weather-icons/css/weather-icons.css';
import Weather from './app_component/weather.component';
import Form from './app_component/form.component';

const API_key = "89109e6b3f306272c55b48704691c896";

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      city: undefined,
      country: undefined,
      icon:undefined,
      main:undefined,
      celsius:undefined,
      temp_max:undefined,
      temp_min:undefined,
      visibility: undefined,
      wind: undefined,
      error:false,
      background: undefined,
      icon_tomorrow: undefined,
      celsius_tomorrow: undefined,
      wind_tomorrow: undefined

    };

    this.weatherIcon = {
      Thunderstorm: "wi-thunderstorm",
      Drizzle: "wi-sleet",
      Rain: "wi-storm-showers",
      Snow: "wi-snow",
      Atmosphere: "wi-fog",
      Clear: "wi-day-sunny",
      Clouds: "wi-day-fog",
    }

    this.weatherBackground = {
      Thunderstorm: "Thunderstorm",
      Drizzle: "Drizzle",
      Rain: "Rain",
      Snow: "Snow",
      Atmosphere: "Atmosphere",
      Clear: `${"Clear"}${Math.floor(Math.random() * 3) + 1}`,
      fewClouds: "fewClouds",
      moderateClouds: "moderateClouds",
      heavyClouds: "heavyClouds",
      overcastClouds: "overcastClouds",
    }

  }
 

  calCelsius(temp){
    let cell = Math.floor(temp - 273.15) + "\u00B0";
    return cell;
  }

  calWind(windSpeed){
    let power = "wind speed" + windSpeed.toFixed(1) + " km/h";
    return power;
  }

  get_WeatherIcon (icons, rangeId) {
    switch (true) {
      case rangeId >= 200 && rangeId <= 232:
        this.setState({icon: this.weatherIcon.Thunderstorm, background: this.weatherBackground.Thunderstorm});
        break;
      case rangeId >= 300 && rangeId <= 321:
        this.setState({icon: this.weatherIcon.Drizzle, background: this.weatherBackground.Drizzle});
        break;
      case rangeId >= 500 && rangeId <= 531:
        this.setState({icon: this.weatherIcon.Rain, background: this.weatherBackground.Rain});
        break;
      case rangeId >= 600 && rangeId <= 622:
        this.setState({icon: this.weatherIcon.Snow, background: this.weatherBackground.Snow});
        break;
      case rangeId >= 700 && rangeId <= 781:
        this.setState({icon: this.weatherIcon.Atmosphere, background: this.weatherBackground.Atmosphere});
        break;
      case rangeId === 800:
        this.setState({icon: this.weatherIcon.Clear, background: this.weatherBackground.Clear});
        break;
      case rangeId === 801:
        this.setState({icon: this.weatherIcon.Clouds, background: this.weatherBackground.fewClouds});
        break;
      case rangeId === 802:
        this.setState({icon: this.weatherIcon.Clouds, background: this.weatherBackground.moderateClouds});
        break;
      case rangeId === 803:
        this.setState({icon: this.weatherIcon.Clouds, background: this.weatherBackground.heavyClouds});
        break;
      case rangeId === 804:
        this.setState({icon: this.weatherIcon.Clouds, background: this.weatherBackground.overcastClouds});
        break;
        default:
        this.setState({icon: this.weatherIcon.Clouds, background: this.weatherBackground.Clouds});
    }
  }

  getWeather = async (e) => {

    e.preventDefault();

    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    
    if (city || country){
    const api_call = await fetch(
      `http://api.openweathermap.org/data/2.5/forecast?q=${city},${country}&appid=${API_key}`
      );

    const response = await api_call.json();

    console.log(response);
      
    this.setState({
      city: `${response.city.name}, ${response.city.country}`,
      celsius: this.calCelsius(response.list[0].main.temp),
      temp_max: this.calCelsius(response.list[0].main.temp_max),
      temp_min: this.calCelsius(response.list[0].main.temp_min),
      description: response.list[0].weather[0].description,
      visibility: response.list[0].weather[0].visibility,
      wind: this.calWind(response.list[0].wind.speed),
      error: false
    })

    this.get_WeatherIcon(this.weatherIcon, response.list[0].weather[0].id);
  }
  else {
    this.setState({
      error: true
    })
  }
  }

  render () {
    return(
      <div className={`App ${this.state.background}`}>
    <div className="wrap-app">
    <Form loadweather={this.getWeather} error={this.state.error}/>
    <Weather 
    city={this.state.city} 
    country={this.state.country}
    temp_celsius={this.state.celsius}
    temp_max={this.state.temp_max}
    temp_min={this.state.temp_min}
    wind={this.state.wind}
    description={this.state.description}
    weatherIcon={this.state.icon}
     />
    </div>
    </div>
    );
  }
}


export default App;