import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, Platform, AlertController } from 'ionic-angular';
import { Injectable } from '@angular/core';
import { environment } from '../../environment';
import { HttpClient } from '@angular/common/http';
import { LocalNotifications } from '@ionic-native/local-notifications';

/**
 * Generated class for the AddMedicationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
  
@IonicPage()
@Injectable()
@Component({
  selector: 'page-add-medication',
  templateUrl: 'add-medication.html',
})
export class AddMedicationPage {
  toggled: boolean;
  items: string[];
  toggleVal: boolean;
  public currentNumber = 0;
  public currentNumberT = 0;

//  jsonList= this.http.get(this.http://localhost:8100/ICD9.json)
  data = { title:'', description:'', date:'', time:'' };
  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController,
     public http: HttpClient, public localNotifications: LocalNotifications, public platform: Platform,
     public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddMedicationPage');
  }

  submit() {
    console.log(this.data);
    var date = new Date(this.data.date+" "+this.data.time);
    console.log(date);
    this.localNotifications.schedule({
       text: 'Delayed ILocalNotification',
       trigger : {at: date},
       led: 'FF0000',
      //  sound: this.setSound(),
    });
    let alert = this.alertCtrl.create({
      title: 'Congratulation!',
      subTitle: 'Notification setup successfully at '+date,
      buttons: ['OK']
    });
    alert.present();
    this.data = { title:'', description:'', date:'', time:'' };
  }

  goTo(pageName){
    this.navCtrl.push(pageName);
  }

  initializeItems() {
    this.items = [
      'Influenza', 'Diabetes', 'Acne','Headache', 'Chickenpox', 
      'Asthma', 'pneumonia', 'Cough', 'mumps','rubella',
      'Sore throat', 'Cold', 'Ear infections', 'Measles', 'croup',
      'diarrhea', 'vomiting', 'fever', 'AIDS', 'Anemia', 'diphtheria',
      'respiratory distress syndrome', 'rhinovirus', 'Cancer', 'Hepatitis A',
      'Tuberculosis', 'Cystic fibrosis', 'Leukemia', 'Tetanus', 'Polio',
      'Lyme Disease', 'AHF', 'Herpes B virus', 'Bilharzia', 'OverWeight and Obesity',
      'CKD(Chronic Kidney Disease)', 'Dog Bites', 'Ebola', 'Epilepsy', 'Food Poisoning',
      'Fingal Rye Infections', 'GAE', 'Genetics Disease', 'H5N1', 'Hearing Loss',
      'Hemophilia', 'Hepatitis A', 'Hepatitis B', 'Hyperthermia', 'Hypothermia',
      'Lymphocytic Choriomeningitis (LCM)', 'Malaria', 'Mental Retardation',
      'Burns', 'Noisy breathing', 'Nosebleeds', 'Oral thrush', 'Orthodontist',
      'Pale skin', 'Ringworm', 'Tinea', 'Toddler appetite', 'Type-1 diabetes',
      'Type-2 diabetes', 'Turned foot', 'Ulcers – mouth', 'Urticaria', 'Urinary tract infection',
      'Upper respiratory tract infection', 'Varicella', 'Wetting the bed', 'Jaundice'
    ];
  }

  getItems(ev) {
    this.initializeItems();
    var val = ev.target.value;
    if (val && val.trim() != ''){
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

  public increment () {
  this.currentNumber++;
}

  public decrement () {
  this.currentNumber--;
}

public incrementT () {
  this.currentNumberT++;
}

  public decrementT () {
  this.currentNumberT--;
}

}


