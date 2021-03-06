import { Component } from '@angular/core';

import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { TokenProvider } from '../../providers/token/token';

/**
 * Generated class for the AddTemperaturePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-temperature',
  templateUrl: 'add-temperature.html',
})
export class AddTemperaturePage {


  date_taken;
  note;
  key; 
  value; 
  unit_id;
  token;
  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController,
     private authProvider: AuthProvider, private tokenProvider: TokenProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddWeightPage');
  }

  goTo(pageName){
    this.navCtrl.push(pageName);
  }

  
  presentToast(position){
    let toast = this.toastCtrl.create({
      message: 'Great!.. New temperature measurement was recorded successfully',
      duration: 4000,
      position: position
    });
    toast.present();
  }


  onAddMeasurement() {
    this.token = this.tokenProvider.get();
    this.authProvider.postAddMeasurement('Temperature', this.date_taken, this.note, this.key, this.value, this.unit_id, this.token).subscribe();
  }

}
