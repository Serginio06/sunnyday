import {Injectable} from '@angular/core';
// import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
// import {SqlStorage} from 'ionic-angular';
import {Storage} from '@ionic/storage';

@Injectable()
export class StorageService {
  private storageDB = 'weatherStorage';
  // private storage = Storage;
  private weathers: Array<Object>;

  constructor(public storage: Storage) {
    // console.log('Hello Storage Provider');
    // this.storage = new Storage(SqlStorage, {name: this.storageDB});



    this.getWeathers().then(
      (data) => {

        this.weathers = JSON.parse(data);

      }, (err) => {
        console.log('getWeathers/err: ', JSON.stringify(err));
      }
    )

  }

  getWeathers():any {

    // return this.storage.get(this.storageDB);

    return this.storage.ready().then(() => {
      // Storage is ready to use
      // Note: ready() is only available in 1.1.7 or greater!
      return this.storage.get(this.storageDB) || [];
    });

  }

  setWeather(weather) {
    if (!this.weathers) {
      this.weathers = [weather]
    }
    else {
      this.weathers.push(weather);
    }


    this.storage.ready().then(() => {
      // Storage is ready to use
      // Note: ready() is only available in 1.1.7 or greater!
      this.storage.set(this.storageDB, JSON.stringify(this.weathers));
    });


    // this.storage.set(this.storageDB, JSON.stringify(this.weathers));


  }

}
