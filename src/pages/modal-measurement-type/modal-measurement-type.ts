import { Component } from '@angular/core';
import { IonicPage, NavParams, ViewController, NavController } from 'ionic-angular';

/**
 * Generated class for the ModalMeasurementTypePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modal-measurement-type',
  templateUrl: 'modal-measurement-type.html',
})
export class ModalMeasurementTypePage {

  constructor( public navCtrl: NavController, public navParams: NavParams, private view: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalMeasurementTypePage');
  }

  close() {
    this.view.dismiss();
  }

}
