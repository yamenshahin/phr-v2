import { Component } from '@angular/core';
import { IonicPage, NavParams, Platform } from 'ionic-angular';
import { CallNumber} from '@ionic-native/call-number';

import { HttpClientModule } from '@angular/common/http'; 
import { Http, HttpModule} from '@angular/http'

/**
 * Generated class for the CallNumberPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-call-number',
  templateUrl: 'call-number.html',
})
export class CallNumberPage {

  phoneNumber: string;
  constructor(public navParams: NavParams, private platform: Platform, private callNumber: CallNumber) {
  }
  async call() {
    //this makes sure everything is ready before calling native APIs
   await this.platform.ready();

  //1st call# for importing injected version of call# from ionic native library and 2nd is for call# fnc.
    try{
      await this.callNumber.callNumber(this.phoneNumber, true);
      console.log("Opened Dialer");
    }
    catch (e) {
      console.error(e || "Error Launching Dialer");
    }
  }

}
