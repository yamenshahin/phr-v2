import { Component } from '@angular/core';


import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { TokenProvider } from '../../providers/token/token';

/**
 * Generated class for the AddHeightPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-height',
  templateUrl: 'add-height.html',
})
export class AddHeightPage {


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
    this.authProvider.postAddMeasurement('Height', this.date_taken, this.note, this.key, this.value, this.unit_id, this.token).subscribe();
  }

}
