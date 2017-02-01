import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import  {AddPage} from "../pages/add/add";
import {GlobalServices} from "../providers/global-services"

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AddPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AddPage

  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, GlobalServices]
})
export class AppModule {}
