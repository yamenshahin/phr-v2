import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TokenProvider } from '../../providers/token/token';
import { AuthProvider } from '../../providers/auth/auth';
/**
 * Generated class for the HeightPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-height',
  templateUrl: 'height.html',
})
export class HeightPage {
  measurements;
  token;

  constructor(public navCtrl: NavController, public navParams: NavParams, private authProvider: AuthProvider, private tokenProvider: TokenProvider) {
    this.token = this.tokenProvider.get();
    this.authProvider.getMeasurementsWithName(this.token, 'height').subscribe( data=>{
    	console.log(data);
    	this.measurements= data;
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HeightPage');
  }

  linkTo(measurement) {
    console.log(measurement);
    this.navCtrl.push('MeasurementDetailPage', {measurement: measurement});
    
  }

  goTo(pageName){
    this.navCtrl.push(pageName);
  }
}
