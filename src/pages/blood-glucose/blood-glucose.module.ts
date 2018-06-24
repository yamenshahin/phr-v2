import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BloodGlucosePage } from './blood-glucose';

@NgModule({
  declarations: [
    BloodGlucosePage,
  ],
  imports: [
    IonicPageModule.forChild(BloodGlucosePage),
  ],
})
export class BloodGlucosePageModule {}
