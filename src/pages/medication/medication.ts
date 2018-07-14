import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
//import { directiveDef } from '../../../node_modules/@angular/core/src/view';

/**
 * Generated class for the MedicationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-medication',
  templateUrl: 'medication.html',
})
export class MedicationPage {
 
  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MedicationPage');
  }

  goTo(pageName){
    this.navCtrl.push(pageName);
  }

  showAlert() {
    const alert = this.alertCtrl.create({
      title: 'Diagnosis: Cough',
      subTitle: '(Zutripro oral-benzonatate oral-Mucinex D oral-Iophen CNR) Taking Times: 2/Day',
      buttons: ['OK']
    });
    alert.present();
  }

  showAlert2(){
    const alert = this.alertCtrl.create({
      title: 'Diagnosis: Influenza',
      subTitle: '(Clotrimazole cream, Zinc pyrithione soap) Taking Times: 3/Day',
      buttons: ['OK']
    });
    alert.present();
  }

}

