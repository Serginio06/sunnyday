import {Component} from '@angular/core';
import {Platform} from 'ionic-angular';
import {StatusBar, Splashscreen} from 'ionic-native';
// import {StatusBar} from 'ionic-native';

import {HomePage} from '../pages/home/home';
// import {Weather} from '../providers/weather';
// import  {AddPage} from "../pages/add/add";



@Component({
  templateUrl: 'app.html',
  // providers: [Weather]
})
export class MyApp {
  rootPage = HomePage;

  constructor(platform: Platform) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      Splashscreen.hide();
      StatusBar.styleDefault();
    });
  }
}
