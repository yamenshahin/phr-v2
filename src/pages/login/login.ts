import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { TokenProvider } from '../../providers/token/token';
import { AuthenticationProvider } from '../../providers/authentication/authentication';

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
  error;
  constructor(public navCtrl: NavController, public navParams: NavParams, private authProvider: AuthProvider, private tokenProvider: TokenProvider, private authentication: AuthenticationProvider) {
    // If already login
    if(tokenProvider.get()) {
      this.navCtrl.setRoot('RegisterPage');
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }


  onLogin() {
  	this.authProvider.postLogin(this.email, this.password).subscribe( 
      data => this.handleResponse(data['access_token']),
      error => this.handleError(error)
    );
  }

  /**
   * Handle login error
   * @param error 
   */
  handleError(error) {
    this.error = error.error.error;
  }

  handleResponse(data) {
    this.tokenProvider.handle(data);
    // TODO: nav bar based on authenticationStatus
    this.authentication.changeAuthenticationStatus(true);
    // TODO: Set default redirect to registerPage to add new child, or go to home/dashboard
    this.navCtrl.push('RegisterPage');
  }

  goTo(pageName){
    this.navCtrl.push(pageName);
  }
}
