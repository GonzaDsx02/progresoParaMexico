import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Item } from '../pages/report/report.module'
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators'


@Injectable({
  providedIn: 'root'
})
export class DataApiService {


  constructor(private afs: AngularFirestore) {
    this.itemCollection = afs.collection<Item>('Reports');
    this.item = this.itemCollection.valueChanges()
   }

  private itemCollection: AngularFirestoreCollection<Item>;
  private item: Observable<Item[]>

  getAll2(){
    return this.item = this.itemCollection.snapshotChanges()
    .pipe(map(actions=> actions.map(
      a=> {
        const data = a.payload.doc.data() as Item;
        const id = a.payload.doc.id;
        return {id, ...data};
      }
    )));
  };//fin del segundo método para tener todos los datos

  getAggressors(){
    return this.itemCollection.snapshotChanges().pipe(
      map(
        actions => actions.map(
          gender =>{
            const boe = gender.payload.doc.data().aggressor_gen
            return {boe};
          }//fin de la funcion
        )// fin del map de la funcion
      )// fin del map
    )// fin del pipe
  }// fin del metodo Agresores


  getEscuelas() {
    return this.itemCollection.snapshotChanges().pipe(
      map(
        actions => actions.map(
          gender => {
            const schol = gender.payload.doc.data().level
            return { schol };
          }//fin de la funcion
        )// fin del map de la funcion
      )// fin del map
    )// fin del pipe
  }// fin del metodo escuelas


  getViolenceType() {
    return this.itemCollection.snapshotChanges().pipe(
      map(
        actions => actions.map(
          gender => {
            const violence = gender.payload.doc.data()
            return { violence };
          }//fin de la funcion
        )// fin del map de la funcion
      )// fin del map
    )// fin del pipe
  }// fin del metodo escuelas

}// fin de la clase
