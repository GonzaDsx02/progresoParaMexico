import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';


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

  constructor(private fb: FormBuilder, private userService: UserService, private router: Router,){
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

  //método para validar los campos que están vacíos en el formulario
  private visualValidationForm(formGroup: FormGroup) {
    (<any>Object).values(formGroup.controls).forEach(control => {
      control.markAsTouched();
      if (control.controls) {
        this.visualValidationForm(control);
      }
    });
  }

  /**
   * Funcion para inicio de sesion
  */
  login(form: NgForm) {
    //Aqui va todo el guateque
    if(form.invalid){
      this.visualValidationForm(this.formLogin);
      //this.showAlert('Error', '¡Usuario y contraseña requeridos!');

      //mensaje de alerta de la libreria sweetAlert2
      Swal.fire({
        icon: 'error',
        title: 'Algo salió mal',
        text: 'Usuario y contraseña requeridos',
        heightAuto: false
      });
      return;
    }
    this.userService.loginUser(this.username, this.password)
      .then(response => {
        console.log(response);
        this.router.navigate(['/panel-admin']);
      })
      .catch(error => {
        //this.showAlert('Datos Erroneos', 'Favor de verificar sus datos');

        //mensaje de alerta de la libreria sweetAlert2
        Swal.fire({
          icon: 'error',
          title: 'Datos erroneos',
          text: 'Verifica tu email o contraseña',
          heightAuto: false
        });
      }); // fin del catch

  }
} // fin LoginPage