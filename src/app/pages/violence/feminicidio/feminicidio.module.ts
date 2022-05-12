import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FeminicidioPageRoutingModule } from './feminicidio-routing.module';

import { FeminicidioPage } from './feminicidio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FeminicidioPageRoutingModule
  ],
  declarations: [FeminicidioPage]
})
export class FeminicidioPageModule {}
