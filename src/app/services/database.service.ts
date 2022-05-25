import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  /**
   *cosntructor() - Constructor de la clase DatabaseService
   * @param firestore: Variable tipo AngularFirestore necesaria para la conexion con la base de datos
   *  de firestore
   */
  constructor(private firestore: AngularFirestore) { }
  createDo<tipo>(data:tipo, enlace:string) {
    const ref = this.firestore.collection<tipo>(enlace);
    return ref.add(data);
  }

  /**
   *getCollection() - Método que realiza la conexión con la colección de 'Reports'
   */
  getCollection(){
    //console.log("Recibi datos");
    this.firestore.collection('Reports').valueChanges().subscribe((res)=>{
        console.log('res ->', res);
    });
  }
}
