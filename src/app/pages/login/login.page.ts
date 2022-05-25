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
   * constructor(): Constructor de la clase
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
   * login() - Funcion para inicio de sesion
   * @method loginUser(usuario, contraseña) - método encargado de haer el login del usuario en en la pagina
   * @param usuario - Usuario para el inicio de sesion
   * @param contraseña - Contraseña del usuario
   * @return showAlert(titulo, mensaje) - regresa un metodo de alerta al cual se le pasan
   * @return navigate() - Usa métodos del router para redirigir hacia el panel de administración
  */
  login() {
    this.userService.loginUser(this.username, this.password)
      .then(response => {
        //console.log(response);
        this.router.navigate(['/panel-admin']);
      })
      .catch(error => {
        //console.log(error);
        this.showAlert('Datos Erroneos', 'Favor de verificar sus datos');
      }); // fin del catch
  };

  /**
   * showAlert(titulo, mensaje) - Desplega una ventana informativa
   * @param header - Titulo de la ventana informativa
   * @param message - Mensaje de la ventana informativa
   */
  async showAlert(header, message) {
    const alert = await this.alertController.create({
      header, message, buttons: ["ok"]
    });
    await alert.present();
  }// end of the show alert method

} // fin del on init
