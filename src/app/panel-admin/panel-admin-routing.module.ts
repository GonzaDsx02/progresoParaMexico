import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PanelAdminPage } from './panel-admin.page';

const routes: Routes = [
  {
    path: '',
    component: PanelAdminPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PanelAdminPageRoutingModule {}
