import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MedicalImagesPage } from './medical-images';

@NgModule({
  declarations: [
    MedicalImagesPage,
  ],
  imports: [
    IonicPageModule.forChild(MedicalImagesPage),
  ],
})
export class MedicalImagesPageModule {}
