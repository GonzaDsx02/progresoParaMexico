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

  getAllReports(){
    return this.item = this.itemCollection.snapshotChanges()
    .pipe(map(changes => {
      return changes.map(action => {
        const data = action.payload.doc.data() as Item;
        data.id = action.payload.doc.id
        return data;
      });
    }));
  };

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
  }
}
