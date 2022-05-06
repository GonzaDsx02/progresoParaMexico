import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-report',
  templateUrl: './report.page.html',
  styleUrls: ['./report.page.scss'],
})
export class ReportPage implements OnInit {

  public formLogin: FormGroup;
  public validationMessages: object;

  violence_type: string;
  victim_gen: string;
  aggressor_gen: string;
  aggressor_name: string;
  place: string;
  victim_role: string;
  aggressor_role: string;
  school: string;
  school_place: string;  

  constructor(private fb: FormBuilder) { 
    this.formLogin = this.fb.group({
      v_type: ['', Validators.required],
      vic_gen: ['', Validators.required],
      ag_gen:['', Validators.required],
      ag_name: ['', Validators.required],
      place_form: ['', Validators.required],
      vic_role: ['', Validators.required],
      ag_role: ['', Validators.required],
      school_form: ['', Validators.required],
      sc_place_form: ['', Validators.required]
    });

    this.validationMessages = {
      v_type: [
        { type: 'required', message: "Obligatorio!" }
      ],      
      vic_gen: [
        { type: 'required', message: "Obligatorio!" }
      ],      
      ag_gen: [
        { type: 'required', message: "Obligatorio!" }
      ],
      ag_name: [
        { type: 'required', message: "Obligatorio!" }
      ],
      place_form: [
        { type: 'required', message: "Obligatorio!" }
      ],
      vic_role: [
        { type: 'required', message: "Obligatorio!" }
      ],
      ag_role: [
        { type: 'required', message: "Obligatorio!" }
      ],
      school_form: [
        { type: 'required', message: "Obligatorio!" }
      ],
      sc_place_form: [
        { type: 'required', message: "Obligatorio!" }
      ]
    }

    this.violence_type = "";
    this.victim_gen = ""
    this.aggressor_gen = "";
    this.place = "";
    this.victim_role = "";
    this.aggressor_role = "";
    this.school = "";
    this.school_place = ""
  }

  ngOnInit() {
  }

  send(){
    //Aqui van los codigos que envían el formulario a la base de datos
    alert(this.victim_gen);
  }

}

