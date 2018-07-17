import { Component } from '@angular/core';

import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { TokenProvider } from '../../providers/token/token';


/**
 * Generated class for the AddWeightPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-weight',
  templateUrl: 'add-weight.html',
})
export class AddWeightPage {

  date_taken;
  note;
  value; 
  token;
  constructor(public navCtrl: NavController, public navParams: NavParams,public toastCtrl: ToastController, private authProvider: AuthProvider, private tokenProvider: TokenProvider) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddWeightPage');
  }

  goTo(pageName){
    this.navCtrl.push(pageName);
  }

  onAddMeasurement() {
    this.token = this.tokenProvider.get();
    this.authProvider.postAddMeasurement('Weight', this.date_taken, this.note, 'Weight', this.value, "12", this.token).subscribe();
  }

  presentToast(position){
    let toast = this.toastCtrl.create({
      message: 'Great!.. New weight measurement was recorded successfully',
      duration: 4000,
      position: position
    });
    toast.present();
  }

}
