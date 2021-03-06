import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';

/**
 * Generated class for the MainMeasurementPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-main-measurement',
  templateUrl: 'main-measurement.html',
})
export class MainMeasurementPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private modal: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MainMeasurementPage');
  }

  goTo(pageName){
    this.navCtrl.push(pageName);
  }

  showMeasurementType() {
    const measurementTypeModal = this.modal.create('ModalMeasurementTypePage');
    measurementTypeModal.present();
  }
}
