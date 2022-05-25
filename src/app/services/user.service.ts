import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from '@angular/fire/auth';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  /**
   *constructor - Consctrutor de la clase para los servicios de authentificación
   * @param auth: Prametro usado para instanciar la clase de Auth
   */
  constructor(private auth:Auth) { }

  /**
   * register(email,password)- Método que se encargar de registrar un usuario
   * @param email - Email del usuario a registrar
   * @param password - Contraseña del usuario a registrar
   * @returns
   */
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
