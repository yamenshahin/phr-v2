import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddMedicationPage } from './add-medication';

@NgModule({
  declarations: [
    AddMedicationPage,
  ],
  imports: [
    IonicPageModule.forChild(AddMedicationPage),
  ],
})
export class AddMedicationPageModule {}
