import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddCholesterolPage } from './add-cholesterol';

@NgModule({
  declarations: [
    AddCholesterolPage,
  ],
  imports: [
    IonicPageModule.forChild(AddCholesterolPage),
  ],
})
export class AddCholesterolPageModule {}
