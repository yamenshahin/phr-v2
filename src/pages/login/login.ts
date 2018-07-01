import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { TokenProvider } from '../../providers/token/token';

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
  constructor(public navCtrl: NavController, public navParams: NavParams, private authProvider: AuthProvider, private tokenProvider: TokenProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }


  onLogin() {
  	this.authProvider.postLogin(this.email, this.password).subscribe( 
      data => this.handleResponse(data['access_token']),
      error => this.handelError(error)
    );
  }

  /**
   * Handle login error
   * @param error 
   */
  handelError(error) {
    this.error = error.error.error;
  }

  handleResponse(data) {
    this.tokenProvider.handle(data);
  }

  goTo(pageName){
    this.navCtrl.push(pageName);
  }
}
