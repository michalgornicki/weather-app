import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'weather-icons/css/weather-icons.css';
import Weather from './app_component/weather.component';

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
      error:false,
      background: undefined,
    };
    this.getWeather()

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
      Clear: "Clear",
      Clouds: "Clouds",
    }

  }

 

  calCelsius(temp){
    let cell = Math.floor(temp - 273.15)
    return cell;
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
      case rangeId >= 801 && rangeId <= 804:
        this.setState({icon: this.weatherIcon.Clouds, background: this.weatherBackground.Clouds});
        break;
        default:
        this.setState({icon: this.weatherIcon.Clouds, background: this.weatherBackground.Clouds});
    }
  }

  getWeather = async () => {
    const api_call = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=Warsaw,pl&appid=${API_key}`
      );

    const response = await api_call.json();

    console.log(response);

    this.setState({
      city: response.name,
      country: response.sys.country,
      celsius: this.calCelsius(response.main.temp),
      temp_max: this.calCelsius(response.main.temp_max),
      temp_min: this.calCelsius(response.main.temp_min),
      description: response.weather[0].description,
    })

    this.get_WeatherIcon(this.weatherIcon, response.weather[0].id);
  }

  render () {
    return(
      <div className={`App ${this.state.background}`}>
    <Weather 
    city={this.state.city} 
    country={this.state.country}
    temp_celsius={this.state.celsius}
    temp_max={this.state.temp_max}
    temp_min={this.state.temp_min}
    description={this.state.description}
    weatherIcon={this.state.icon}
     />
    </div>
    );
  }
}


export default App;
