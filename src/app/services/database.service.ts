import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor(private firestore: AngularFirestore) { }
  createDo<tipo>(data:tipo, enlace:string) {
    const ref = this.firestore.collection<tipo>(enlace);
    return ref.add(data);
  } 

  getCollection(){
    console.log("Recibi datos");
    this.firestore.collection('Reports').valueChanges().subscribe((res)=>{
        console.log('res ->', res);
    });
  }
}
