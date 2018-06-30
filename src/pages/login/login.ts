import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  email;
  password;
  constructor(public navCtrl: NavController, public navParams: NavParams, private authProvider: AuthProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  onLogin() {
  	//console.log(this.email, this.password);
  	this.authProvider.postLogin(this.email, this.password).subscribe( data=>{
    	console.log(JSON.stringify(data));
      localStorage.setItem('wpTocken', JSON.stringify(data));
      this.navCtrl.push('MainPage');
    });
  }

  goTo(pageName){
    this.navCtrl.push(pageName);
  }
}
