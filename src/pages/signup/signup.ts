import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { TokenProvider } from '../../providers/token/token';

/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {
  email;
  password;
  password_confirmation;
  name;
  error;
  constructor(public navCtrl: NavController, public navParams: NavParams, private authProvider: AuthProvider, private tokenProvider: TokenProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }
  onSignup() {
    this.authProvider.postSignup(this.email, this.password, this.password_confirmation, this.name).subscribe( 
      data => this.handleResponse(data),
      error => this.handleError(error)
    );
  }
  
  /**
   * Handle login error
   * @param error 
   */
  
  handleError(error) {
    this.error = error.error.errors;
  }
  handleResponse(data) {
    // Remember this receive an object of token + user not just a token
    this.tokenProvider.handle(data);
    // TODO: Set default redirect to registerPage to add new child, or go to home/dashboard
    this.navCtrl.push('RegisterPage');
  }
  goTo(pageName){
    this.navCtrl.push(pageName);
  }
}
