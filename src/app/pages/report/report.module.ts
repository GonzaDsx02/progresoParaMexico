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
  
  aggressor_name: string;
  aggressor_gen: string;
  aggressor_role: string;
  victim_gen: string;
  victim_role: string;  
  violence_type: string; 
  level: string;
  school: string;   
  school_place: string;  
  description: string; 
  proceed: string;
  contact: string; 
  date: string;
}
