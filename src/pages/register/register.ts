import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { TokenProvider } from '../../providers/token/token';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  name;
  gender;
  birthdate;
  token;
  constructor(public navCtrl: NavController, public navParams: NavParams, private authProvider: AuthProvider, private tokenProvider: TokenProvider) {
  }

  goTo(pageName){
    this.navCtrl.push(pageName);
  } 

  onAddChild() {
    this.token = this.tokenProvider.get();
    this.authProvider.postAddChild(this.name, this.gender, this.birthdate, this.token).subscribe( 
      data => console.log(data)
    );
  }
}
