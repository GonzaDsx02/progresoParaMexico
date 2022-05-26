import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from '@angular/fire/auth';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private auth:Auth, private afsAuth: AngularFireAuth) { }

  registerUser(email:string, pass:string){
    return new Promise((resolve, reject)=>{
      this.afsAuth.createUserWithEmailAndPassword(email,pass)
      .then(userData=>resolve(userData),
      err => reject(err));
    })
  }

register({email, password}:any){
    return createUserWithEmailAndPassword(this.auth,email,password);
}

loginUser(email,password){
  return signInWithEmailAndPassword(this.auth,email,password);
}

logout(){
 return signOut(this.auth)
}

getCurrentUer(){
  return this.auth.currentUser.email
}

}
