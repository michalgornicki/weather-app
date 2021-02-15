import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'weather-icons/css/weather-icons.css';
import Weather from './app_component/weather.component';

const API_key = "2f39577a08f74aadef8b8a03a4e3aba7"

class extends Component {
  state = {}
  render () {
    return();
  }
}

function App() {
  return (
    <div className="App">
    <Weather />
    </div>
  );
}

export default App;
