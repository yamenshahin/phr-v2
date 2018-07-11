import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';

/**
 * Generated class for the AddMedicationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-medication',
  templateUrl: 'add-medication.html',
})
export class AddMedicationPage {
  toggled: boolean;
  items: string[];
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddMedicationPage');
  }

  goTo(pageName){
    this.navCtrl.push(pageName);
  }



  initializeItems() {
    this.items = [
      'Flu',
      'Diabetes',
      'Acne',
      'Headache'
    ];
  }

  getItems(ev) {
    this.initializeItems();
    var val = ev.target.value;
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

  onCancel(event) { }

  public toggle():void {
    this.toggled = this.toggled ? false : true;
  }

  presentToast(position){
    let toast = this.toastCtrl.create({
      message: 'New medication course is added, hope you child gets well soon..',
      duration: 4000,
      position: position
    });
    toast.present();
  }
  
}
