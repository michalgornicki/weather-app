import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "weather-icons/css/weather-icons.css";
import Weather from "./app_component/weather.component";
import Form from "./app_component/form.component";

const API_key = "89109e6b3f306272c55b48704691c896";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      city: undefined,
      country: undefined,
      icon: undefined,
      main: undefined,
      celsius: undefined,
      visibility: undefined,
      wind: undefined,
      error: false,
      background: undefined,
      celsius_tomorrow: undefined,
      wind_tomorrow: undefined,
      description_tomorrow: undefined,
      celsius_aftertomorrow: undefined,
      wind_aftertomorrow: undefined,
      description_aftertomorrow: undefined,
      celsius_afteraftertomorrow: undefined,
      wind_afteraftertomorrow: undefined,
      description_afteraftertomorrow: undefined,
      tomorrow: undefined,
      aftertomorrow: undefined,
      afteraftertomorrow: undefined,
    };

    this.weatherIcon = {
      Thunderstorm: "wi-thunderstorm",
      Drizzle: "wi-sleet",
      Rain: "wi-storm-showers",
      Snow: "wi-snow",
      Atmosphere: "wi-fog",
      Clear: "wi-day-sunny",
      Clouds: "wi-day-fog",
    };

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
    };
  }

  calCelsius(temp) {
    let cell = Math.floor(temp - 273.15) + "\u00B0";
    return cell;
  }

  calWind(windSpeed) {
    let power = "wind: " + windSpeed.toFixed(1) + " km/h";
    return power;
  }

  get_WeatherIcon(icons, rangeId) {
    switch (true) {
      case rangeId >= 200 && rangeId <= 232:
        this.setState({
          icon: this.weatherIcon.Thunderstorm,
          background: this.weatherBackground.Thunderstorm,
        });
        break;
      case rangeId >= 300 && rangeId <= 321:
        this.setState({
          icon: this.weatherIcon.Drizzle,
          background: this.weatherBackground.Drizzle,
        });
        break;
      case rangeId >= 500 && rangeId <= 531:
        this.setState({
          icon: this.weatherIcon.Rain,
          background: this.weatherBackground.Rain,
        });
        break;
      case rangeId >= 600 && rangeId <= 622:
        this.setState({
          icon: this.weatherIcon.Snow,
          background: this.weatherBackground.Snow,
        });
        break;
      case rangeId >= 700 && rangeId <= 781:
        this.setState({
          icon: this.weatherIcon.Atmosphere,
          background: this.weatherBackground.Atmosphere,
        });
        break;
      case rangeId === 800:
        this.setState({
          icon: this.weatherIcon.Clear,
          background: this.weatherBackground.Clear,
        });
        break;
      case rangeId === 801:
        this.setState({
          icon: this.weatherIcon.Clouds,
          background: this.weatherBackground.fewClouds,
        });
        break;
      case rangeId === 802:
        this.setState({
          icon: this.weatherIcon.Clouds,
          background: this.weatherBackground.moderateClouds,
        });
        break;
      case rangeId === 803:
        this.setState({
          icon: this.weatherIcon.Clouds,
          background: this.weatherBackground.heavyClouds,
        });
        break;
      case rangeId === 804:
        this.setState({
          icon: this.weatherIcon.Clouds,
          background: this.weatherBackground.overcastClouds,
        });
        break;
      default:
        this.setState({
          icon: this.weatherIcon.Clouds,
          background: this.weatherBackground.Clouds,
        });
    }
  }

  getWeather = async (e) => {
    e.preventDefault();

    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;

    const api_call = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city},${country}&appid=${API_key}`
    );

    const response = await api_call.json();

    console.log(response);
    console.log(response.city);

    var days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    var date = new Date();
    var tomorrow = date + 1;
    var plusOneDay = days[date.getDay()];
    var plusTwoDays = days[date.getDay() + 1];
    var plusThreeDays = days[date.getDay() + 3];
    console.log(plusOneDay);
    console.log(plusTwoDays);
    console.log(plusThreeDays);


    if (response.city) {
      this.setState({
        city: `${response.city.name}`,
        celsius: this.calCelsius(response.list[0].main.temp),
        description: response.list[0].weather[0].description,
        visibility: "visibility: " + response.list[0].visibility + " meters",
        wind: this.calWind(response.list[0].wind.speed),
        celsius_tomorrow: this.calCelsius(response.list[8].main.temp),
        wind_tomorrow: this.calWind(response.list[8].wind.speed),
        description_tomorrow: response.list[8].weather[0].description,
        celsius_aftertomorrow: this.calCelsius(response.list[16].main.temp),
        wind_aftertomorrow: this.calWind(response.list[16].wind.speed),
        description_aftertomorrow: response.list[16].weather[0].description,
        celsius_afteraftertomorrow: this.calCelsius(
          response.list[24].main.temp
        ),
        wind_afteraftertomorrow: this.calWind(response.list[24].wind.speed),
        description_afteraftertomorrow:
          response.list[24].weather[0].description,
        tomorrow: plusOneDay,
        aftertomorrow: plusTwoDays,
        afteraftertomorrow: plusThreeDays,
        error: false,
      });

      this.get_WeatherIcon(this.weatherIcon, response.list[0].weather[0].id);
      document.getElementsByClassName("flex-row")[0].style.visibility="visible";
    } else {
      this.setState({
        error: true,
      });
    }
  };

  render() {
    return (
      <div className={`App ${this.state.background}`}>
        <div className="wrap-app">
          <Form loadweather={this.getWeather} error={this.state.error} />
          <Weather
            city={this.state.city}
            country={this.state.country}
            temp_celsius={this.state.celsius}
            wind={this.state.wind}
            visibility={this.state.visibility}
            description={this.state.description}
            weatherIcon={this.state.icon}
            temp_celsius_tomorrow={this.state.celsius_tomorrow}
            wind_tomorrow={this.state.wind_tomorrow}
            description_tomorrow={this.state.description_tomorrow}
            temp_celsius_aftertomorrow={this.state.celsius_aftertomorrow}
            wind_aftertomorrow={this.state.wind_aftertomorrow}
            description_aftertomorrow={this.state.description_aftertomorrow}
            temp_celsius_afteraftertomorrow={
              this.state.celsius_afteraftertomorrow
            }
            wind_afteraftertomorrow={this.state.wind_afteraftertomorrow}
            description_afteraftertomorrow={
              this.state.description_afteraftertomorrow
            }
            tomorrow={this.state.tomorrow}
            aftertomorrow={this.state.aftertomorrow}
            afteraftertomorrow={this.state.afteraftertomorrow}
          />
        </div>
      </div>
    );
  }
}

export default App;
