import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MedicationPage } from './medication';

@NgModule({
  declarations: [
    MedicationPage,
  ],
  imports: [
    IonicPageModule.forChild(MedicationPage),
  ],
})
export class MedicationPageModule {}
