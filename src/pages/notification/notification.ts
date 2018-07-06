import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform, AlertController } from 'ionic-angular';
import { LocalNotifications } from '@ionic-native/local-notifications';


@IonicPage()
@Component({
  selector: 'page-notification',
  templateUrl: 'notification.html',
})
export class NotificationPage {

  data = { title:'', description:'', date:'', time:'' };
  
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public localNotifications: LocalNotifications,
    public platform: Platform,
    public alertCtrl: AlertController) {

  }
  

  ionViewDidLoad() {
    console.log('ionViewDidLoad NotificationPage');
  }

  submit() {
    console.log(this.data);
    var date = new Date(this.data.date+" "+this.data.time);
    console.log(date);
    this.localNotifications.schedule({
       text: 'Delayed ILocalNotification',
       //CHECK this error with Yamen??
       at: date,
       led: 'FF0000',
       sound: this.setSound(),
    });
    let alert = this.alertCtrl.create({
      title: 'Congratulation!',
      subTitle: 'Notification setup successfully at '+date,
      buttons: ['OK']
    });
    alert.present();
    this.data = { title:'', description:'', date:'', time:'' };
  }

  setSound() {
  if (this.platform.is('android')) {
    return 'file://assets/sounds/Rooster.mp3'
  } else {
    return 'file://assets/sounds/Rooster.caf'
  }
}

}
