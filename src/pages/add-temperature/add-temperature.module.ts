import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddTemperaturePage } from './add-temperature';

@NgModule({
  declarations: [
    AddTemperaturePage,
  ],
  imports: [
    IonicPageModule.forChild(AddTemperaturePage),
  ],
})
export class AddTemperaturePageModule {}
