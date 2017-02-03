import {Component} from '@angular/core';

import {NavController, ModalController} from 'ionic-angular';
import  {AddPage} from '../add/add';
import {GlobalServices} from '../../providers/global-services';
import {Weather} from '../../providers/weather';
import {Observable} from 'rxjs/Observable';
import {TemperaturePipe} from '../../pipes/temperature';
import {ForecastPage} from '../forecast/forecast';
import {WeatherComponent} from '../../components/weather/weather';
import {StorageService} from '../../providers/storage'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  // providers:[Weather]

})

export class HomePage {

  public localWeather: Object;

  constructor(public navCtrl: NavController,
              public modalCtrl: ModalController,
              public globalServices: GlobalServices,
              public weather: Weather,
              public storageService: StorageService) {
    this.getLocalWeather();
    this.getStoredWeather();

  }

  addWeather() {
    let addWeatherModal = this.modalCtrl.create(AddPage);


    addWeatherModal.onDidDismiss(
      (data) => {
        if (data) {
          this.getWeather(data.city, data.country);
          // this.globalServices.weatherList.push(data);
        }

      });

    addWeatherModal.present();

  }

  getWeather(city: string, country: string) {
    //get Weather from API
    this.weather.city(city, country)
      .map(data => data.json())
      .subscribe(
        data => {
          this.globalServices.weatherList.push(data);
          this.storageService.setWeather(data);
        },
        err => {
          console.log('getWeather/err:' + err);
        },
        () => {
          console.log('getWeatehr successfull');
        }
      )


  }

  viewForecast(cityWeather) {
    console.log("forecast: " + cityWeather.name);
    this.navCtrl.push(ForecastPage, {cityWeather: cityWeather});
  }

  getLocalWeather() {

    this.weather.local()
      .subscribe(
        data => {
          this.localWeather = data;
        })
  }

  getStoredWeather() {
    this.storageService.getWeathers().then(
      (weathers) => {
        this.globalServices.weatherList = JSON.parse(weathers) || [];
      }
    )

  }


}
