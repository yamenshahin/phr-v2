import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

/**
 * Generated class for the AllergiesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-allergies',
  templateUrl: 'allergies.html',
})
export class AllergiesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AllergiesPage');
  }
  goTo(pageName){
    this.navCtrl.push(pageName);
  }

  presentPopover(){
    const alert = this.alertCtrl.create({
      title: 'Information:',
      subTitle: 'Type:Food ... Reactions: trouble breathing,coughing, throat tightness,stomach upset, and vomiting.',
      buttons: ['OK']
    });
    alert.present();
  }
  
  presentPopover2(){
    const alert = this.alertCtrl.create({
      title: 'Information:',
      subTitle: 'Type: Food.. Reactions: red spots, swelling, trouble breathing, coughing, stomach upset, and vomiting.',
      buttons: ['OK']
    });
    alert.present();
  }

  presentPopover3(){
    const alert = this.alertCtrl.create({
      title: 'Information:',
      subTitle: 'Type: Animals.. Reactions:runny, itchy, stuffy nose,, sneezing, coughing and wheezing, red, itchy eyes',
      buttons: ['OK']
    });
    alert.present();
  }

}
