import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { Alert } from 'selenium-webdriver';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  //variables para la validacion del formulario. **** No tocar plis ****
  public formLogin: FormGroup;
  public validationMessages: object;

  username: string;
  password: string;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router : Router
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

  login() {
    //Aqui va todo el guateque
   this.userService.loginUser(this.username,this.password)
   .then(response=>{
     console.log(response);
     this.router.navigate(['/panel-admin']);
   })
   .catch(error => {
     console.log(error),
     alert('Error. Datos incorrectos');
    });
    
  }

  /*registro() {
    this.userService.register(this.formLogin.value)
    .then(response=>{
      console.log(response);
    })
    .catch(error=>console.log(error));
    
  }*/

}
