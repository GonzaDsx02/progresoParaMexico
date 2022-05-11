import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FamiliarPageRoutingModule } from './familiar-routing.module';

import { FamiliarPage } from './familiar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FamiliarPageRoutingModule
  ],
  declarations: [FamiliarPage]
})
export class FamiliarPageModule {}
