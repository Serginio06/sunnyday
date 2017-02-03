import {Injectable, Pipe} from '@angular/core';

@Pipe({
  name: 'temperature'
})
@Injectable()
export class TemperaturePipe {

  transform(value: string, units: string) {
    console.log("units: " + units);
    // value = value + ''; // make sure it's a string
    // return value.toLowerCase();
    var c = Math.round(parseInt(value, 10) - 273.15);
    var f = Math.round(parseInt(value, 10) * 9 / 5 - 459.67);

    if ( units != 'c' &&  units != 'f') {
      return `${c} ºC`;
    } else {
      return units == 'c' ? `${c} ºC`: `${f} ºF`
    }


  }
}
