import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';


/**
 * Generated class for the MedicalImagesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-medical-images',
  templateUrl: 'medical-images.html',
})
export class MedicalImagesPage {

  myphoto:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private camera:Camera) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MedicalImagesPage');
  }

  takePhoto(){
    const options: CameraOptions = {
      quality:70,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
    
    this.camera.getPicture(options).then((imageData) => {
     // imageData is either a base64 encoded string or a file URI
     // If it's base64 (DATA_URL):
    this.myphoto = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
     // Handle error
    });
  }

  getImage(){
    const options: CameraOptions = {
      quality:70,
      destinationType: this.camera.DestinationType.FILE_URI,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      saveToPhotoAlbum:true
    }
    
    this.camera.getPicture(options).then((imageData) => {
     // imageData is either a base64 encoded string or a file URI
     // If it's base64 (DATA_URL):
    this.myphoto = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
     // Handle error
    });
  }

  cropImage(){
    const options: CameraOptions = {
      quality:70,
      destinationType: this.camera.DestinationType.FILE_URI,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      saveToPhotoAlbum:true,
      allowEdit:true,
      targetWidth:300,
      targetHeight:300
    }
    
    this.camera.getPicture(options).then((imageData) => {
     // imageData is either a base64 encoded string or a file URI
     // If it's base64 (DATA_URL):
    this.myphoto = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
     // Handle error
    });
  }

}
