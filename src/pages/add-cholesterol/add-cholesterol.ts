import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';

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

  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddCholesterolPage');
  }

  goTo(pageName){
    this.navCtrl.push(pageName);
  }

  presentToast(position){
    let toast = this.toastCtrl.create({
      message: 'New cholesterol measurement was added successfully',
      duration: 3000,
      position: position
    });
    toast.present();
  }

}
