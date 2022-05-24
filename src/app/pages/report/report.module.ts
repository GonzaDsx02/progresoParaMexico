import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReportPageRoutingModule } from './report-routing.module';

import { ReportPage } from './report.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReportPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [ReportPage]
})
export class ReportPageModule {}

export interface Item {
  id:string;
  aggressor_name: string;
  aggressor_gen: string;
  aggressor_role: string;
  victim_gen: string;
  victim_role: string;
  incident_time: string;
  level: string;
  school: string;
  school_place: string;
  description: string;
  denuncied: string;
  actions: string;
  help: string;
  proceed: string;
  contact: string;
  date: string;
  type_vio: string;
}
