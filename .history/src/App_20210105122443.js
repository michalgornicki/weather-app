import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'weather-icons/css/weather-icons.css';
import Weather from './app_component/weather.component';

const API_key = "f6c0733e4a92325c09795ce66091cd02";

class App extends React.Component {
  constructor(){
    super();
    this.state = {};
    this.getWeather();
  }

  getWeather = async () => {
    const api_call = await fetch(
      'http://api.openweathermap.org/data/2.5/weather?q=Warsaw,pl&appid=${API_key}'
      );

    const response = await api_call.json();

    console.log(response);
  }
  
  render () {
    return(
      <div className="App">
    <Weather />
    </div>
    );
  }
}


export default App;
