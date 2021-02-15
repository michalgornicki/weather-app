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
      country: undefined
    };
    this.getWeather()
  }

  getWeather = async () => {
    const api_call = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=Warsaw,pl&appid=${API_key}`
      );

    const response = await api_call.json();

    console.log(response);

    this.setState
  }
  
  render () {
    return(
      <div className="App">
    <Weather city={this.state.city} country={this.state.country} />
    </div>
    );
  }
}


export default App;
