import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MeasurementProvider } from '../../providers/measurement/measurement';

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
  constructor(public navCtrl: NavController, public navParams: NavParams, private measurementProvider: MeasurementProvider) {
  	this.measurementProvider.getMeasurement().subscribe( data=>{
    	console.log(data);
    	this.measurements= data;
    });
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad MeasurementPage');
    
  }

  goTo(measurement) {
    console.log(measurement);
    this.navCtrl.push('MeasurementDetailPage', {measurement: measurement});
    
  }
}
