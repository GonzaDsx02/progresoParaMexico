import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { Alert } from 'selenium-webdriver';
import { AlertController, LoadingController } from '@ionic/angular';

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

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router,
    // agregando campos para la alerta "personalizada"
    private loadinController: LoadingController,
    private alertController: AlertController
  ) {

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
    this.userService.loginUser(this.username, this.password)
      .then(response => {
        console.log(response);
        this.router.navigate(['/panel-admin']);
      })
      .catch(error => {  
        console.log(error);
        this.showAlert('Datos Erroneos', 'Favor de verificar sus datos');
      }); // fin del catch

  }
  //  Añadiendo el método para desplegar la alerta
  async showAlert(header, message) {
    const alert = await this.alertController.create({
      header, message, buttons: ["ok"]
    });
    await alert.present();
  }// end of the show alert method

  /*registro() {
    this.userService.register(this.formLogin.value)
    .then(response=>{
      console.log(response);
    })
    .catch(error=>console.log(error));
    
  }*/
} // fin del on init