import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MeasurementDetailPage } from './measurement-detail';

@NgModule({
  declarations: [
    MeasurementDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(MeasurementDetailPage),
  ],
})
export class MeasurementDetailPageModule {}
