import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PanelAdminPageRoutingModule } from './panel-admin-routing.module';

import { PanelAdminPage } from './panel-admin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PanelAdminPageRoutingModule
  ],
  declarations: [PanelAdminPage]
})
export class PanelAdminPageModule {}
