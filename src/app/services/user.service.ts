import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from '@angular/fire/auth';
@Injectable({
  providedIn: 'root'
})
export class UserService {
    /**
   *constructor - Consctrutor de la clase para los servicios de authentificación
   * @param auth: Prametro usado para instanciar la clase de Auth
   */
  constructor(private auth:Auth, private afsAuth: AngularFireAuth) { }

  registerUser(email:string, pass:string){
    return new Promise((resolve, reject)=>{
      this.afsAuth.createUserWithEmailAndPassword(email,pass)
      .then(userData=>resolve(userData),
      err => reject(err));
    })
  }

    /**
     * register(email,password)- Método que se encargar de registrar un usuario
     * @param email - Email del usuario a registrar
     * @param password - Contraseña del usuario a registrar
     * @return- Método propio de firebase para dar de alta a un usuario
     */
  register({email, password}:any){
      return createUserWithEmailAndPassword(this.auth,email,password);
  }

  /**
   *loginUser(email, password): Método para acceder a un usuario
  * @param email- Correo del usuario previamente registrado
  * @param password- contraseña del usuario previamente registrado
  * @returns Método propio de Firebase de tipo promesa con la autenticación del usuario
  */
  loginUser(email,password){
    return signInWithEmailAndPassword(this.auth,email,password);
  }

  /**
   *logout(): Método para salir la sesion del uaurio actual
  * @returns regresa una promesa
  */
  logout(){
  return signOut(this.auth)
  }

  /**
   *getCurrentUser(): Método para recuperar el email del usuario actual
  * @returns Regresa el email del usuario
  */
  getCurrentEmailUser(){
    return this.auth.currentUser.email
  }

}
