import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';

/**
 * Generated class for the AddSurgeriesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-surgeries',
  templateUrl: 'add-surgeries.html',
})
export class AddSurgeriesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddSurgeriesPage');
  }
  goTo(pageName){
    this.navCtrl.push(pageName);
  }

  presentToast(position){
    let toast = this.toastCtrl.create({
      message: 'New surgery is recorded, hope your child gets well soon..',
      duration: 4000,
      position: position
    });
    toast.present();
  }

}
