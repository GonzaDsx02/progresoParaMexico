import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  
  constructor() {}

  insert(){    
    var div = document.getElementById("contenedor")
    div.innerHTML = "<ion-label (click)='insert2()' style='color:black;'>Insertar elementos 5</ion-label>"
  }

  insert2(){
    var div = document.getElementById("contenedor")
    div.innerHTML = "<ion-button (click)='insert()' style='color:black;'>Insertar elementos</ion-button>"
  }
}
