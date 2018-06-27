import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BloodPressurePage } from './blood-pressure';

@NgModule({
  declarations: [
    BloodPressurePage,
  ],
  imports: [
    IonicPageModule.forChild(BloodPressurePage),
  ],
})
export class BloodPressurePageModule {}
