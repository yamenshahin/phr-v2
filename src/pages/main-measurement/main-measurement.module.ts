import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MainMeasurementPage } from './main-measurement';

@NgModule({
  declarations: [
    MainMeasurementPage,
  ],
  imports: [
    IonicPageModule.forChild(MainMeasurementPage),
  ],
})
export class MainMeasurementPageModule {}
