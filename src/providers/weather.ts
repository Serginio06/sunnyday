import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

@Injectable()
export class Weather {
  private appId = '8763da6d1780ae9064cfef5b43437fb7';
  private baseURL = 'http://api.openweathermap.org/data/2.5/';

  constructor(public http: Http) {

  }

  city(city: string, country: string) {
    let url = this.baseURL + 'weather';
    url += '?appId=' + this.appId;
    url += '&q=' + city;
    url += ',' + country;

    return this.http.get(url);


  };

}
