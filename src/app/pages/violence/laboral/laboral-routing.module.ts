import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LaboralPage } from './laboral.page';

const routes: Routes = [
  {
    path: '',
    component: LaboralPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LaboralPageRoutingModule {}
