import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InstitucionalPageRoutingModule } from './institucional-routing.module';

import { InstitucionalPage } from './institucional.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InstitucionalPageRoutingModule
  ],
  declarations: [InstitucionalPage]
})
export class InstitucionalPageModule {}
