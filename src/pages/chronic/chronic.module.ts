import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChronicPage } from './chronic';

@NgModule({
  declarations: [
    ChronicPage,
  ],
  imports: [
    IonicPageModule.forChild(ChronicPage),
  ],
})
export class ChronicPageModule {}
