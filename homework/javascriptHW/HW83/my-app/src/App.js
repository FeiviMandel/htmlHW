import './App.css';
import React, { Component } from 'react';
import WeatherDetails from './WeatherDetails';

export default class App extends Component {
  state = {};
  getTheWeather = e => {
    const units = 'imperial';
    const zip = e.target.value;
    const apiKey = 'a4f4d42bbc7552a93d345f9347e65a23';
    fetch(`http://api.openweathermap.org/data/2.5/weather?appid=${apiKey}&zip=${zip}&units=${units}`)
      .then(r => {
        if (!r.ok) {
          // throw new Error(`${r.status} ${r.statusText}`);
          throw new Error('Zipcode Not Found. Please Enter A Valid Zipcode');
        }
        return r.json();
      })
      .then(weatherData => {
        this.setState({
          weather: {
            location: weatherData.name,
            picture: `http://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`,
            description: `${weatherData.main.temp} and ${weatherData.weather[0].description}`
          }
        });
      })
      .catch(err => alert(err));
  }
  render() {
    return (
      <div className="App">
        <h1>PCS Weather App</h1>
        <WeatherDetails foo ={this.state.weather} />
        <input type="number" onBlur={this.getTheWeather} />
      </div>
    );
  }
}