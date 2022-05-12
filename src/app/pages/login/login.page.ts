import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  /**
  * Variables para la validación del formulario de login (No alterar)
  * @var formLogin Formulario para iniciar sesión
  * @var validationMessages Mensajes de validación
  */
  public formLogin: FormGroup;
  public validationMessages: object;

  username: string;
  password: string;
  /**
   * Constructor de la clase
   * @param formBuilder para crear el formulario
   * @param validationMessages para crear el mensaje de validacion (Para requerir el campo de usuario y contraseña)
   */
  constructor(private fb: FormBuilder) { 

    this.formLogin = this.fb.group({
      us_name: ['', Validators.required],
      pass: ['', Validators.required]
    });

    this.validationMessages = {
      us_name: [
        { type: 'required', message: "Obligatorio!" }
      ],      
      pass: [
        { type: 'required', message: "Obligatorio!" }
      ]
    }

    this.username = "";
    this.password = "";
  }

  ngOnInit() {
  }

  /**
   * Funcion para inicio de sesion
  */
  login() {
    //Aqui va todo el guateque
  }

}
