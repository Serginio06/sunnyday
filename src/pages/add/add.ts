import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';
import {GlobalServices} from "../../providers/global-services"


/*
  Generated class for the Add page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-add',
  templateUrl: 'add.html'
})
export class AddPage {

  public data = {
    country: "uk",
    city: "London"
  };



  constructor(public navCtrl: NavController, public navParams: NavParams,  private viewCtrl:ViewController, private globalServices:GlobalServices) {



  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad AddPage');
  }

  dismiss(formData) {
    // this.globalServices.lableNamesObj.city;
    console.log("formData= " + formData);
    this.viewCtrl.dismiss(formData);
  }

}
