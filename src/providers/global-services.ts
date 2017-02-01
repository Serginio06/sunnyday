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
