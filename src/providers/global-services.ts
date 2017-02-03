import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

/*
 Generated class for the GlobalServices provider.

 See https://angular.io/docs/ts/latest/guide/dependency-injection.html
 for more info on providers and Angular 2 DI.
 */
@Injectable()
export class GlobalServices {
  public lableNamesObj: any = {
    city: "City",
    country: "Country"
  };

  public btnNamesObj: Object = {};
  public userMsgObj: Object = {};
  public weatherList = [];
  public countryList = [
    {code: "us", name: "Unites States"},
    {code: "uk", name: "United Kingdom"},
    {code: "ua", name: "Ukraine"}

  ];

  public tempUnitsList: any = [
    {code: 'c', name: 'Celsius'},
    {code: 'f', name: 'Fahrenheit'},
    {code: 'k', name: 'Kelvin'}
  ];
  public tempUnit:string = this.tempUnitsList[0].code;


  constructor(public http: Http) {
    console.log('Hello GlobalServices Provider');

    this.init();

  }


  init() {

    // this.lableNamesObj = {
    //   city: "City",
    //   country: "Country"
    // };


  }
}
