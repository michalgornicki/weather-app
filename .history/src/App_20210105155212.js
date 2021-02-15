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
      error:false
    };
    this.getWeather()
  }

  calCelsius(temp){
    let cell = Math.floor(temp - 273.15)
    return cell,
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
      celsius: response.main.temp
    })
  }
  
  render () {
    return(
      <div className="App">
    <Weather 
    city={this.state.city} 
    country={this.state.country}
    temp_celsius={this.state.celsius}
    temp_max={this.state.temp_max}
    temp_min={this.state.temp_min}
    description={this.state.description}
     />
    </div>
    );
  }
}


export default App;
