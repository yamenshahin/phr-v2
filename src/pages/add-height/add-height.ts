import { Component } from '@angular/core';


import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
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
  value; 
  token;
  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController, 
    private authProvider: AuthProvider, private tokenProvider: TokenProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddWeightPage');
  }

  
  presentToast(position){
    let toast = this.toastCtrl.create({
      message: 'Great!.. New height measurement was recorded successfully',
      duration: 4000,
      position: position
    });
    toast.present();
  }


  goTo(pageName){
    this.navCtrl.push(pageName);
  }


  onAddMeasurement() {
    this.token = this.tokenProvider.get();
    this.authProvider.postAddMeasurement('Height', this.date_taken, this.note, 'Height', this.value, "7", this.token).subscribe();
  }

}
