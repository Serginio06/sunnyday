import { Component, Input,Output, EventEmitter } from '@angular/core';
import {GlobalServices} from '../../providers/global-services';
// import {TemperaturePipe} from '../../pipes/temperature';


/*
  Generated class for the Weather component.

  See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/
@Component({
  selector: 'weather',
  templateUrl: 'weather.html'
})
export class WeatherComponent {

  @Input() weather: Object;
  @Output() viewMore: EventEmitter<Object> = new EventEmitter();

  // text: string;


  constructor(
    public globalServices: GlobalServices,
  ) {
    // console.log('Hello Weather Component');
    // this.text = 'Hello World';
  }

  hitWeather() {
    this.viewMore.next(this.weather);

  }

}
