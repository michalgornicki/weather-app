import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'weather-icons/css/weather-icons.css';
import Weather from './app_component/weather.component';

const API_key = "2f39577a08f74aadef8b8a03a4e3aba7";

class App extends React.Component {
  constructor(){
    super();
    this.state = {};
    this.getWeather();
  }

  getWeather = async () => {
    
      // eslint-disable-next-line no-template-curly-in-string
    const api_call = await fetch(
      'http://api.openweathermap.org/data/2.5/weather?q=Warsaw&appid=${API_key}'
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
