import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';

/**
 * Generated class for the AddBloodGlucosePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-blood-glucose',
  templateUrl: 'add-blood-glucose.html',
})
export class AddBloodGlucosePage {

  constructor(public navCtrl: NavController, public navParams: NavParams,  public toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddBloodGlucosePage');
  }

  goTo(pageName){
    this.navCtrl.push(pageName);
  }

  presentToast(position){
    let toast = this.toastCtrl.create({
      message: 'New blood glucose measurement was added successfully',
      duration: 3000,
      position: position
    });
    toast.present();
  }

}
