import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddBloodGlucosePage } from './add-blood-glucose';

@NgModule({
  declarations: [
    AddBloodGlucosePage,
  ],
  imports: [
    IonicPageModule.forChild(AddBloodGlucosePage),
  ],
})
export class AddBloodGlucosePageModule {}
