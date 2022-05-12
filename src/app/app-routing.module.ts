import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { canActivate } from '@angular/fire/auth-guard';
import {redirectUnauthorizedTo} from '@angular/fire/auth-guard';
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
    path: 'report',
    loadChildren: () => import('./pages/report/report.module').then( m => m.ReportPageModule)
  },


  {
    path: 'about',
    loadChildren: () => import('./pages/about/about.module').then( m => m.AboutPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
//<<<<<<< HEAD
    path: 'panel-admin',
    loadChildren: () => import('./panel-admin/panel-admin.module').then( m => m.PanelAdminPageModule),
    ...canActivate(()=>redirectUnauthorizedTo(['/about']))
  },

//=======
   { path: 'violence-type/institucional',
    loadChildren: () => import('./pages/violence/institucional/institucional.module').then( m => m.InstitucionalPageModule)
  },
  {
    path: 'violence-type/sexual',
    loadChildren: () => import('./pages/violence/sexual/sexual.module').then( m => m.SexualPageModule)
  },
  {
    path: 'violence-type/laboral',
    loadChildren: () => import('./pages/violence/laboral/laboral.module').then( m => m.LaboralPageModule)
  },
  {
    path: 'violence-type/familiar',
    loadChildren: () => import('./pages/violence/familiar/familiar.module').then( m => m.FamiliarPageModule)
  },
  {
    path: 'violence-type/feminicidio',
    loadChildren: () => import('./pages/violence/feminicidio/feminicidio.module').then( m => m.FeminicidioPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
