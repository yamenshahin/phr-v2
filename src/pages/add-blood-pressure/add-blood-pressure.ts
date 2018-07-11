import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ToastController } from 'ionic-angular';

/**
 * Generated class for the AddBloodPressurePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-blood-pressure',
  templateUrl: 'add-blood-pressure.html',
})
export class AddBloodPressurePage {
  alertCtrl: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddBloodPressurePage');
  }

  showConfirm() {
    const confirm = this.alertCtrl.create({
      title: 'Cancel!',
      message: 'Are You sure you want to cancel the new measurement?',
      buttons: [
        {
          text: 'No, go back',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Sure',
          handler: () => {
            console.log('Agree clicked');
          }
        }
      ]
    });
    confirm.present();
  }

  goTo(pageName){
    this.navCtrl.push(pageName);
  }

  presentToast(position){
    let toast = this.toastCtrl.create({
      message: 'New blood pressure measurement was added successfully',
      duration: 3000,
      position: position
    });
    toast.present();
  }

}
