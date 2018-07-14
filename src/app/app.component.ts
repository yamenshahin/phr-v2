import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { MenuController } from 'ionic-angular';
import { MainPage } from '../pages/main/main'
import { MeasurementPage } from '../pages/measurement/measurement'
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = 'LoginPage';
  @ViewChild(Nav) navCtrl : Nav;
  menuCtrl: any;
  pages = [
    { component: MainPage, name: "Main Page"},
    { component: MeasurementPage, name: "Measurement Page"},
  ];

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, public menu: MenuController) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  openPage(page){
    this.navCtrl.push(page.component);
    this.menuCtrl.close();
  }

  closeMenu(){
    this.menuCtrl.close();
  }

}

