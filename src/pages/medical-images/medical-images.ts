import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Camera, CameraOptions } from '@ionic-native/camera';


@IonicPage()
@Component({
  selector: 'page-medical-images',
  templateUrl: 'medical-images.html',
})
export class MedicalImagesPage {

  public image= '';
  private options:CameraOptions;
  constructor(public navCtrl: NavController, public navParams: NavParams, private camera: Camera) {
    
    this.options = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
  }
  
  getPicture(){
    this.camera.getPicture(this.options).then((imageData) => {
      this.image='data: image/jpeg;base64,' + imageData;
    }, (err) =>{
      //Here is where errors happen.
    })
}
}
