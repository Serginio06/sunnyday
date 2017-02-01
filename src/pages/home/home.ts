import { Component } from '@angular/core';

import { NavController, ModalController } from 'ionic-angular';
import  {AddPage} from '../add/add';
import {GlobalServices} from '../../providers/global-services';
import {Weather} from '../../providers/weather';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers:[Weather]
})

export class HomePage {

  constructor(public navCtrl: NavController,
              public modalCtrl:ModalController,
              public globalServices:GlobalServices,
              public weather:Weather) {


  }

  addWeather(){
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

  getWeather(city:string, country:string){
    //get Weather from API
    this.weather.city(city,country)
      .subscribe(
        data => {
          this.globalServices.weatherList.push(data);

    },
        err => {console.log('getWeather/err:' + err);
    },
        () => {console.log('getWeatehr successfull');}
      )


  }


}
