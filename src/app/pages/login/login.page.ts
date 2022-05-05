import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  username: string;
  password: string;

  constructor() { 
    this.username = "";
    this.password = "";
  }

  ngOnInit() {
  }

  login(form: NgForm) {
    alert("Sesión iniciada")
  }

}
