import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MedicationCoursePage } from './medication-course';

@NgModule({
  declarations: [
    MedicationCoursePage,
  ],
  imports: [
    IonicPageModule.forChild(MedicationCoursePage),
  ],
})
export class MedicationCoursePageModule {}
