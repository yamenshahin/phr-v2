import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { ModalController } from 'ionic-angular/components/modal/modal-controller';
import { GalleryModal } from 'ionic-gallery-modal';


@IonicPage()
@Component({
  selector: 'page-medical-images',
  templateUrl: 'medical-images.html',
})
export class MedicalImagesPage {
  private images: any[] = [];
  myphoto: any;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private modalCtrl: ModalController, private camera: Camera) {
    for (let i=1; i<6;i++){
      this.images.push({
        url: `assets/imgs/${i}.jpg`
      });
    }
    this.images[0].title = 'Complete blood count, JULY';
    this.images[1].title = 'Complete blood count, MAY';
    this.images[2].title = 'Hands x-ray after accedent, March ';
    this.images[3].title = 'test!!';
    this.images[4].title = 'Happy Me...';

  }

  goTo(pageName){
    this.navCtrl.push(pageName);
  }
  
  takePicture(){
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
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
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      saveToPhotoAlbum: true
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
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      saveToPhotoAlbum: true,
      allowEdit: true,
      targetWidth: 300,
      targetHeight: 300
    }
    
    this.camera.getPicture(options).then((imageData) => {
     // imageData is either a base64 encoded string or a file URI
     // If it's base64 (DATA_URL):
    this.myphoto = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
     // Handle error
    });
  }

  viewUploaded(){
    let modal = this.modalCtrl.create(GalleryModal, {
      photos: this.images,
      initialSlide: 0,
      closeIcon: 'arrow-back'
    });
    modal.present();
  }

    
  /*  this.options = {
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
    });
}*/

}
