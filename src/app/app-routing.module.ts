import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },

  {
    path: 'institucional',
    loadChildren: () => import('./pages/violence/institucional/institucional.module').then( m => m.InstitucionalPageModule)
  },  {
    path: 'sexual',
    loadChildren: () => import('./pages/violence/sexual/sexual.module').then( m => m.SexualPageModule)
  },
  {
    path: 'laboral',
    loadChildren: () => import('./pages/violence/laboral/laboral.module').then( m => m.LaboralPageModule)
  },
  {
    path: 'familiar',
    loadChildren: () => import('./pages/violence/familiar/familiar.module').then( m => m.FamiliarPageModule)
  },
  {
    path: 'feminicidio',
    loadChildren: () => import('./pages/violence/feminicidio/feminicidio.module').then( m => m.FeminicidioPageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
