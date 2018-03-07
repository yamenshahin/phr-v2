import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddBloodPressurePage } from './add-blood-pressure';

@NgModule({
  declarations: [
    AddBloodPressurePage,
  ],
  imports: [
    IonicPageModule.forChild(AddBloodPressurePage),
  ],
})
export class AddBloodPressurePageModule {}
