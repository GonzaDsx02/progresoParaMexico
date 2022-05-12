import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FeminicidioPage } from './feminicidio.page';

const routes: Routes = [
  {
    path: '',
    component: FeminicidioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeminicidioPageRoutingModule {}
