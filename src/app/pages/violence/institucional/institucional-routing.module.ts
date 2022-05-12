import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InstitucionalPage } from './institucional.page';

const routes: Routes = [
  {
    path: '',
    component: InstitucionalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InstitucionalPageRoutingModule {}
