import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FamiliarPage } from './familiar.page';

const routes: Routes = [
  {
    path: '',
    component: FamiliarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FamiliarPageRoutingModule {}
