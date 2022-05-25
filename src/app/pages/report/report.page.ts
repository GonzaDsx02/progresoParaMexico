import { Component, OnInit, ViewChild } from '@angular/core';
import { format, parseISO} from 'date-fns';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
   * constructor(): Constructor de la clase
   * @param formBuilder para crear el formulario
   * @variable v_type: Tipo de violencia reportada
   * @variable vic_gen: Genero de la víctima
   * @variable ag_gen: Genero del agresor
   * @variable ag_name: Nombre del agresor
   * @variable place: Lugar de la violencia
   * @variable vic_role: Rol de la víctima
   * @variable ag_role: Rol del agresor
   * @variable school_form: Escuela en donde ocurrió la agresión
   * @variable sc_place_form: Lugar de la escuela en donde ocurrió la agresión
   */
  constructor(private fb: FormBuilder, private firestore: DatabaseService, private alertController: AlertController) {
    this.formReports = this.fb.group({
      lvl: ['', Validators.required],
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
      lvl:[{type: 'required', message: "Obligatorio!"}],
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

//--------------------------------------------------------------------------------------------------------------------------------------------
  //Funciones utilizadas para la seleccion y el formato de fechas seleccionadas.

  //obtiene la fecha actual.
  /**
   *  getActualDate(): Método para regresar la fecha actual
   * @returns - la fecha actual
   */
  private getActualDate(){
    return (new Date().getMonth()+1)<10 ? new Date().getFullYear() + '-0' + (new Date().getMonth()+1) + '-' + new Date().getDate() : new Date().getFullYear() + '-' + (new Date().getMonth()+1) + '-' + new Date().getDate();
  }


  /**
   * getDate(): Guarda la fecha seleccionada dentro de la variable {actualDate}. Esta variable es la que se debe utilizar para las operaciones en la BD.
  */
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

  /**
   * send(): Método para insertar los reportes dentro de la base de datos
   * @constant data - contiene toda la informacion recuperada del formulario
   * @constant enlace - Contiene el nombre de la base de datos
   * @method createDo(data,enlace) - Método encargado de ingresar los datos a la colección especificada en 'enlace'
   */
  send(){
    /*
      Aqui van los codigos que envían el formulario a la base de datos
    */

    //Este alert permite visualizar los datos que fueron ingresados en el formulario
    //console.log('Esto vamos a guardar->', this.newItem)
    const data = this.newItem;
    const enlace = 'Reports';
    this.firestore.createDo(data,enlace);
    this.showAlert('Datos registrados', 'Estos datos seran parte de la estadistica estatal.\n Si se le dara seguimiento a tu denuncia, espera a que nuestro equipo se ponga en contacto contigo.');
    this.formReports.reset()
  }
}

