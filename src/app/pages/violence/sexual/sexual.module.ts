import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SexualPageRoutingModule } from './sexual-routing.module';

import { SexualPage } from './sexual.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SexualPageRoutingModule
  ],
  declarations: [SexualPage]
})
export class SexualPageModule {}
