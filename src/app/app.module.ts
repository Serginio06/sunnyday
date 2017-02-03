import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import  {AddPage} from "../pages/add/add";
import {GlobalServices} from "../providers/global-services"
import {StorageService} from "../providers/storage"
import {TemperaturePipe} from '../pipes/temperature';
import {ForecastPage} from '../pages/forecast/forecast';
import {Weather} from '../providers/weather';
import {WeatherComponent} from '../components/weather/weather';
import { Storage } from '@ionic/storage';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AddPage,
    TemperaturePipe,
    ForecastPage,
    WeatherComponent

  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AddPage,
    ForecastPage



  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, GlobalServices, Weather, StorageService, Storage]
})
export class AppModule {}
