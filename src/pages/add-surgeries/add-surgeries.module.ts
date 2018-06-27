import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddSurgeriesPage } from './add-surgeries';

@NgModule({
  declarations: [
    AddSurgeriesPage,
  ],
  imports: [
    IonicPageModule.forChild(AddSurgeriesPage),
  ],
})
export class AddSurgeriesPageModule {}
