import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Geolocation} from 'ionic-native';
import {Observable} from 'rxjs/Observable';

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
    // url += '&units=metric';
    url += '&lang=ru';

    return this.http.get(url);


  };

  forecast(citiId: string, numOfDays: number) {
    let url = this.baseURL + 'forecast/daily';
    url += '?appId=' + this.appId;
    url += '&id=' + citiId;
    url += '&cnt=' + numOfDays;

    return this.http.get(url);
  }

  local() {


    let Obs = Observable.create(observer => {

      Geolocation.getCurrentPosition().then(
        resp => {
          let lat = resp.coords.latitude;
          let lng = resp.coords.longitude;

          let url = this.baseURL + 'weather';
          url += '?appId=' + this.appId;
          url += '&lat='+lat +'&lon=' + lng;

          // console.log('url=${url}');
          console.log('url:' + url);
          this.http.get(url)
            .subscribe(data => {
                observer.next(data.json());

              },
              err => {
                observer.error('http/err: ' + err)
              },
              () => {
                observer.complete()
              }
            )
        },
        err => {
          observer.error('getCurrentPosition/err: ' + err)
        })

    });

    return Obs;

  }
}
