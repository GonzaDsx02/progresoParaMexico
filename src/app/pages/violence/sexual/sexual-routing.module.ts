import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SexualPage } from './sexual.page';

const routes: Routes = [
  {
    path: '',
    component: SexualPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SexualPageRoutingModule {}
