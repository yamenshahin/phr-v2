import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MeasurementDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-measurement-detail',
  templateUrl: 'measurement-detail.html',
})
export class MeasurementDetailPage {
  measurement;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.measurement = this.navParams.get('measurement');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MeasurementDetailPage');
  }

}
