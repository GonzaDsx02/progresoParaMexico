import { Component, OnInit, ViewChild } from '@angular/core';
import { format, parseISO} from 'date-fns';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { DatabaseService } from 'src/app/services/database.service';
import { Item } from './report.module';

@Component({
  selector: 'app-report',
  templateUrl: './report.page.html',
  styleUrls: ['./report.page.scss'],
})
export class ReportPage implements OnInit {

  /**
  * Variables para la validación del formulario de reporte de violencia (No alterar)
  * @var formReports Formulario para reportar la violencia
  * @var validationMessages Mensajes de validación
  */
  public formReports: FormGroup;
  public validationMessages: object;
  incorrect = false;


  //VARIABLES QUE GUARDAN LA INFORMACIÓN PROVENIENTE DEL HTML.
  //---------------YA ESTAN LISTAS PARA USARSE----------------
  actualDate = this.getDate();

  newItem: Item = {
    id: "",
    aggressor_name: "",
    aggressor_gen: "",
    aggressor_role: "",
    victim_gen: "",
    victim_role: "",
    incident_time: "",
    level: "",
    school: "",
    school_place: "",
    description: "",
    denuncied: "",
    actions: "",
    help: "",
    proceed: "",
    date: this.actualDate,
    contact: "",
    type_vio: "",
  }

  //----------------------------------------------------------


  /**
   * Constructor de la clase
   * @param formBuilder para crear el formulario
   *
   * v_type: Tipo de violencia reportada
   *
   * vic_gen: Genero de la víctima
   *
   * ag_gen: Genero del agresor
   *
   * ag_name: Nombre del agresor
   *
   * place: Lugar de la violencia
   *
   * vic_role: Rol de la víctima
   *
   * ag_role: Rol del agresor
   *
   * school_form: Escuela en donde ocurrió la agresión
   *
   * sc_place_form: Lugar de la escuela en donde ocurrió la agresión
   */
  constructor(private fb: FormBuilder, private firestore: DatabaseService, private alertController: AlertController) {
    this.formReports = this.fb.group({
      level: ['', Validators.required],
      school_form: ['', Validators.required],
      vic_gen: ['', Validators.required],
      vic_role: ['', Validators.required],
      ag_name: ['', Validators.required],
      ag_gen:['', Validators.required],
      ag_role: ['', Validators.required],
      inc_time: ['', Validators.required],
      sc_place_form: ['', Validators.required],
      desc: ['', Validators.required],
      denuncied: ['', Validators.required],
      actions: ['', Validators.required],
      help: ['', Validators.required],
      proc: ['', Validators.required],
      cont: [''],
      date_val: ['', Validators.required],
      type_vio: ['', Validators.required]
    });

    this.validationMessages = {
      level:[{type: 'required', message: "Obligatorio!"}],
      school_form: [{ type: 'required', message: "Obligatorio!" }],
      vic_gen: [{ type: 'required', message: "Obligatorio!" }],
      vic_role: [{ type: 'required', message: "Obligatorio!" }],
      ag_name: [{ type: 'required', message: "Obligatorio!" }],
      ag_gen: [{ type: 'required', message: "Obligatorio!" }],
      ag_role: [{ type: 'required', message: "Obligatorio!" }],
      inc_time: [{ type: 'required', message: "Obligatorio!" }],
      sc_place_form: [{ type: 'required', message: "Obligatorio!" }],
      desc:[{type: 'required', message: "Obligatorio!"}],
      denuncied: [{ type: 'required', message: "Obligatorio!" }],
      actions: [{ type: 'required', message: "Obligatorio!" }],
      help: [{ type: 'required', message: "Obligatorio!" }],
      proc:[{type: 'required', message: "Obligatorio!"}],
      date_val:[{type: 'required', message: "Obligatorio!"}],
      type_vio:[{type: 'required', message: "Obligatorio!"}]
    }
  }

  ngOnInit() {
  }

  /**
   * Funcion para enviar los datos del formulario a la base de datos
   * @param alert para mostrar un mensaje de alerta datos a enviar:
   * @variable violence_type: Tipo de violencia reportada
   * @variable victim_gen: Genero de la víctima
   * @variable aggresor_gen: Genero del agresor
   * @variable aggressor_name: Nombre del agresor
   * @variable place: Lugar de la violencia
   * @variable victim_role: Rol de la víctima
   * @variable aggressor_role: Rol del agresor*
   * @variable school: Escuela en donde ocurrió la agresión
   * @variable school_place: Lugar de la escuela
   */

//--------------------------------------------------------------------------------------------------------------------------------------------
  //Funciones utilizadas para la seleccion y el formato de fechas seleccionadas.

  //obtiene la fecha actual.
  private getActualDate(){
    return (new Date().getMonth()+1)<10 ? new Date().getFullYear() + '-0' + (new Date().getMonth()+1) + '-' + new Date().getDate() : new Date().getFullYear() + '-' + (new Date().getMonth()+1) + '-' + new Date().getDate();
  }

  //Guarda la fecha seleccionada dentro de la variable {actualDate}. Esta variable es la que se debe utilizar para las operaciones en la BD.
  getDate(){
    return format(parseISO(this.getActualDate()), 'd MMM, yyyy'); //El formato puede ser modificado a criterio del desarrollador.
  }

//--------------------------------------------------------------------------------------------------------------------------------------------
  async showAlert(header, message) {
    const alert = await this.alertController.create({
      header, message, buttons: ["ok"]
    });
    await alert.present();
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

  send(f: NgForm){
    /*
      Aqui van los codigos que envían el formulario a la base de datos
    */

    //validación del formulario
    if(this.newItem.level && this.newItem.school && this.newItem.aggressor_name && this.newItem.aggressor_gen && this.newItem.aggressor_role && this.newItem.victim_gen && this.newItem.victim_role && this.newItem.incident_time && this.newItem.school_place && this.newItem.description && this.newItem.denuncied && this.newItem.proceed && this.newItem.type_vio){
      if(this.newItem.denuncied=='yes'){
        if(this.newItem.actions && this.newItem.help){
          this.showAlert('Reporte enviado', 'Envío exitoso');

          //Aquí comienza el envío de datos
          //Este alert permite visualizar los datos que fueron ingresados en el formulario
          //console.log('Esto vamos a guardar->', this.newItem)
          const data = this.newItem;
          const enlace = 'Reports';
          this.firestore.createDo(data,enlace);
          this.showAlert('Datos registrados', 'Estos datos seran parte de la estadistica estatal.\n Si se le dara seguimiento a tu denuncia, espera a que nuestro equipo se ponga en contacto contigo.');
          this.formReports.reset()
          //termina el envío de datos

        }else{
          this.visualValidationForm(this.formReports);
          this.showAlert('Campos obligatorios', 'Ingresa los datos faltantes');
        }
      }else{
        this.showAlert('Reporte enviado', 'Envío exitoso');
      }
    }else{
      this.visualValidationForm(this.formReports);
      this.showAlert('Campos obligatorios', 'Ingresa los datos faltantes');
    }
  }
}

