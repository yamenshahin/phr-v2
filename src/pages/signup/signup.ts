import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';

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
  constructor(public navCtrl: NavController, public navParams: NavParams, private authProvider: AuthProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }
  onSignup() {
    this.authProvider.postSignup(this.email, this.password, this.password_confirmation, this.name).subscribe( 
      data => console.log(data),
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
  goTo(pageName){
    this.navCtrl.push(pageName);
  }
}
