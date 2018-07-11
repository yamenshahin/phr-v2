import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TokenProvider } from '../../providers/token/token';
import { AuthProvider } from '../../providers/auth/auth';

/**
 * Generated class for the MeasurementPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-measurement',
  templateUrl: 'measurement.html',
})
export class MeasurementPage {
  measurements;
  token;
  
  
  constructor(public navCtrl: NavController, public navParams: NavParams, private authProvider: AuthProvider, private tokenProvider: TokenProvider) {
    this.token = this.tokenProvider.get();
  	this.authProvider.getMeasurements(this.token).subscribe( data=>{
    	console.log(data);
    	this.measurements= data;
    });
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad MeasurementPage');
    
  }

  linkTo(measurement) {
    console.log(measurement);
    this.navCtrl.push('MeasurementDetailPage', {measurement: measurement});
    
  }
  goTo(pageName){
    this.navCtrl.push(pageName);
  }
}
