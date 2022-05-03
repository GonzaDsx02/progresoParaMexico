import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-report',
  templateUrl: './report.page.html',
  styleUrls: ['./report.page.scss'],
})
export class ReportPage implements OnInit {

  violence_type: string;
  victim_gen: string;
  aggressor_gen: string;
  aggressor_name: string;
  victim_role: string;
  aggressor_role: string;
  school: string;
  school_place: string;

  constructor() { 
    this.violence_type = "";
    this.victim_gen = ""
    this.aggressor_gen = "";
    this.victim_role = "";
    this.aggressor_role = "";
    this.school = "";
    this.school_place = ""
  }

  ngOnInit() {
  }

  send(form: NgForm){
    //Aqui van los codigos que envían el formulario a la base de datos
    alert("Datos enviados")
  }

}
