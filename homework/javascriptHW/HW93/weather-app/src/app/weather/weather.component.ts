import { HttpClient } from '@angular/common/http';
import { Component} from '@angular/core';
import { WeatherServerProps, Weather } from '../shared/Weather';
import { zip } from 'rxjs';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent{
  weather: Weather;

  constructor(private httpClient: HttpClient) { }
  
  onClickMe() {
    this.httpClient.get<WeatherServerProps>(`http://api.openweathermap.org/data/2.5/weather?appid={apiKey}&zip=08701&units=imperial`)
      .subscribe(weatherData => {
        console.log(weatherData);
        this.weather = {
          location: weatherData.name,
          temp: weatherData.main.temp,
          description: weatherData.weather[0].description,
          icon: `http://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`
        }
        console.log(this.weather);
      });
  }

}
