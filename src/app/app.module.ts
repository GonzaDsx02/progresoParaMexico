import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import {AngularFireModule} from '@angular/fire/compat';
import { AngularFirestoreModule, AngularFirestore } from '@angular/fire/compat/firestore';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, provideFirebaseApp(() => initializeApp(environment.firebase)), provideAuth(() => getAuth()),AngularFireModule.initializeApp(environment.firebase),AngularFirestoreModule, provideFirebaseApp(() => initializeApp(environment.firebase)), provideAuth(() => getAuth())],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, AngularFirestore],
  bootstrap: [AppComponent],
})
export class AppModule {}
