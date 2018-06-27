import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CholesterolPage } from './cholesterol';

@NgModule({
  declarations: [
    CholesterolPage,
  ],
  imports: [
    IonicPageModule.forChild(CholesterolPage),
  ],
})
export class CholesterolPageModule {}
