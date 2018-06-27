import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddWeightPage } from './add-weight';

@NgModule({
  declarations: [
    AddWeightPage,
  ],
  imports: [
    IonicPageModule.forChild(AddWeightPage),
  ],
})
export class AddWeightPageModule {}
