import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CallNumberPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-call-number',
  templateUrl: 'call-number.html',
})
export class CallNumberPage {
  public currentNumber = 0;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CallNumberPage');
  }

  public increment() {
    this.currentNumber++;
  }

  public decrement() {
    this.currentNumber--;
  }
  
}


