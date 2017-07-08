import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VitalInformationsPage } from './vital-informations';

@NgModule({
  declarations: [
    VitalInformationsPage,
  ],
  imports: [
    IonicPageModule.forChild(VitalInformationsPage),
  ],
  exports: [
    VitalInformationsPage
  ]
})
export class VitalInformationsPageModule {}
