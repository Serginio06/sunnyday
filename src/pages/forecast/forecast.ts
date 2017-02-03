import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {Weather} from '../../providers/weather';
import {GlobalServices} from '../../providers/global-services';


@Component({
  selector: 'page-forecast',
  templateUrl: 'forecast.html'
})
export class ForecastPage {
  public cityWeather;
  public forecast = [];

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public weather: Weather,
              public globalServices: GlobalServices) {
    this.cityWeather = navParams.get('cityWeather');
    this.getForecast(this.cityWeather.id)
  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad ForecastPage');
  }

  getForecast(citiId) {
    this.weather.forecast(citiId, 7)
      .map(data => data.json())
      .subscribe(
        data => {
          this.forecast = data.list;

        },
        err => {
          console.log('getForecast/err: ' + err);
        },
        () => {
          console.log("Forecast for 7 days success");
        }
      )


  }

}
