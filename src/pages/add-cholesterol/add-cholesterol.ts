import { Component } from '@angular/core';

import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { TokenProvider } from '../../providers/token/token';


/**
 * Generated class for the AddCholesterolPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-cholesterol',
  templateUrl: 'add-cholesterol.html',
})
export class AddCholesterolPage {

  date_taken;
  note;
  key; 
  value; 
  unit_id;
  token;
  constructor(public navCtrl: NavController, public navParams: NavParams, private authProvider: AuthProvider, private tokenProvider: TokenProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddWeightPage');
  }

  goTo(pageName){
    this.navCtrl.push(pageName);
  }


  onAddMeasurement() {
    this.token = this.tokenProvider.get();
    this.authProvider.postAddMeasurement('Cholesterol', this.date_taken, this.note, this.key, this.value, this.unit_id, this.token).subscribe();
  }
}
