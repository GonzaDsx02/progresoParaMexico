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
    this.itemCollectionS = afs.collection('EscuelasSuperior');
    this.item = this.itemCollection.valueChanges();
    this.itemS = this.itemCollectionS.valueChanges();
   }

  private itemCollection: AngularFirestoreCollection<Item>;
  private itemCollectionS:AngularFirestoreCollection;
  private itemS: Observable<any[]>;
  private item: Observable<Item[]>

  /**
   * getAll2() - Segunda prueba para la recuperacion general de la informacion dentro de firestore
   */

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

  /**
   * getAggressors() - Método que regresa el genero de los agresores en todos los reportes dentro de Firestore
   */
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

/**
 * getEscuelas() - Método encargado de recuperar el nivel educativo de las esucelas, teniendo solo 2 posibles reultados, Medio Superior o Superior
 */
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

/**
 *  getViolenceType() - Método encargado de recuperar el tipo de violencia en los reportes
* @returns El tipo de vilencia registrada
 */
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
  };// fin del metodo escuelas

  /**
   *  getEscuelaName() - Método encargado de recupear el nombre de las escuelas
   * @returns nombreEscuela: Nombre de la escuela
   */
  getEscuelasName(){
    return this.itemCollectionS.snapshotChanges().pipe(
      map(action=> action.map(
        name=>{
          const nombreEscuela = name.payload.doc.data().Nombre
          return {nombreEscuela}
        }// fin del nombre
      ))// fin de los maps
    )//fin del pipe
  };

  /**
   * getProfes() - Método encargado de recuperar el nombre de los agresores
   * @returns profe: Nombre del professor, variable marcada como nombre del agresor
   */
  getProfes(){
    return this.itemCollection.snapshotChanges().pipe(
      map(action => action.map(
        nameProf=>{
          const profe = nameProf.payload.doc.data().aggressor_name
          return {profe}
        }
      ))// fin de los maps
    )//Fin del pipe
  };//fin del metodo de los profes

}// fin de la clase
