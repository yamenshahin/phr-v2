import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddAllergiesPage } from './add-allergies';

@NgModule({
  declarations: [
    AddAllergiesPage,
  ],
  imports: [
    IonicPageModule.forChild(AddAllergiesPage),
  ],
})
export class AddAllergiesPageModule {}
