import { Component, OnInit} from '@angular/core';
import { format, parseISO} from 'date-fns';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { DatabaseService } from 'src/app/services/database.service';
import { Item } from './report.module';
import Swal from 'sweetalert2';
import { Escuela } from 'src/app/models/models';
import { AngularFirestore } from '@angular/fire/compat/firestore';

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
  /**
   * newItem - Es una instacia de la interfaz de datos 'Item'
   * @param id - Id del documento en
   * @param aggressor_name - Nombre del agresor
   * @param aggressor_gen - Genero del agresor
   * @param aggressor_role - Rol del agresor
   * @param victim_gen - Genero de la victima
   * @param victim_role - Rol de la victima
   * @param incident_time - El tiempo desde que ocurrio el indicende (días, semanas, meses, años...)
   * @param lever - Nivel edicativo donde sucedio la violencia
   * @param school - Nombre de la escuela donde paso el suceso
   * @param school_place - Lugar dentro de la escuela donde paso el suceso
   * @param description - Descripcion del suceso
   * @param denuncied - ¿Se denuncio el suceso?
   * @param actions - En caso de haber denunciad el suceso, ¿Que acciones tomo la institución?
   * @param help - Si la institucion brinda ayuda de algun tipo sobre la violnecia (informacion, taller etc...)
   * @param proceed - Campo que epecifica si el denunciante quiere denunciar de manera formal
   * @param date - No es editable por el usuario, recibe la fecha en que se hace el reporte
   * @param contact - Contacto de la persona que hace el reporte en caso de proceder de manera formal con la denuncia
   * @param type_vio - Tipo de violencia sufrida por quien lleno el reporte
   */
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
  };

  /** 
   * AllEscuelas: Variable que guarda la informacion de las escuelas recuperadas
   * @variable Nombre: Nombre de la escuela
   * @variable Municipio: Municipio al cual la escuela pertenece 
   */
  AllEscuelas:Escuela[] = []
  AllEscuelasMedias:Escuela[] = []

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
  constructor(private fb: FormBuilder, private firestore: DatabaseService, private database:AngularFirestore) {
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
  };

  ngOnInit() {
    this.getSuperiorNames();
    this.getMiddleNames();
  };

//--------------------------------------------------------------------------------------------------------------------------------------------
  //Funciones utilizadas para la seleccion y el formato de fechas seleccionadas.

  //obtiene la fecha actual.
  /**
   *  getActualDate(): Método para regresar la fecha actual
   * @returns - la fecha actual
   */
  private getActualDate(){
    return (new Date().getMonth()+1)<10 ? new Date().getFullYear() + '-0' + (new Date().getMonth()+1) + '-' + new Date().getDate() : new Date().getFullYear() + '-' + (new Date().getMonth()+1) + '-' + new Date().getDate();
  };

  /**
   * getDate(): Guarda la fecha seleccionada dentro de la variable {actualDate}. Esta variable es la que se debe utilizar para las operaciones en la BD.
  */
  getDate(){
    return format(parseISO(this.getActualDate()), 'd MMM, yyyy'); //El formato puede ser modificado a criterio del desarrollador.
  };

//--------------------------------------------------------------------------------------------------------------------------------------------

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
   * send(): Método para insertar los reportes dentro de la base de datos
   * @constant data - contiene toda la informacion recuperada del formulario
   * @constant enlace - Contiene el nombre de la base de datos
   * @method createDo(data,enlace) - Método encargado de ingresar los datos a la colección especificada en 'enlace'
   */
  send(f: NgForm){
    /*
      Aqui van los codigos que envían el formulario a la base de datos
    */

    //validación del formulario
    if(this.newItem.level && this.newItem.school && this.newItem.aggressor_name && this.newItem.aggressor_gen && this.newItem.aggressor_role && this.newItem.victim_gen && this.newItem.victim_role && this.newItem.incident_time && this.newItem.school_place && this.newItem.description && this.newItem.denuncied && this.newItem.proceed && this.newItem.type_vio){
      if(this.newItem.denuncied=='Si'){
        if(this.newItem.actions && this.newItem.help && this.newItem.actions != "" && this.newItem.help != ""){
          //Aquí comienza el envío de datos
          const data = this.newItem;
          const enlace = 'Reports';
          this.firestore.createDo(data,enlace);
          this.formReports.reset()
          //termina el envío de datos

          //mensaje de alerta de la libreria sweetAlert2
          Swal.fire({
            icon: 'success',
            title: 'Datos registrados',
            text: 'Estos datos seran parte de la estadistica estatal.\nEspera a que nuestro equipo se ponga en contacto contigo.',
            heightAuto: false
          });
        }else{
          this.visualValidationForm(this.formReports);
          //mensaje de alerta de la libreria sweetAlert2
          Swal.fire({
            icon: 'error',
            title: 'Algo salió mal',
            text: 'Ingresa o selecciona los campos faltantes',
            heightAuto: false
          });
        }
      }else{
        const data = this.newItem;
        const enlace = 'Reports';
        this.firestore.createDo(data,enlace);

        //mensaje de alerta de la libreria sweetAlert2
        this.formReports.reset()
        Swal.fire({
          icon: 'success',
          title: 'Datos registrados',
          text: 'Estos datos seran parte de la estadistica estatal.',
          heightAuto: false
        });
      }
    }else{
      this.visualValidationForm(this.formReports);
      //mensaje de alerta de la libreria sweetAlert2
      Swal.fire({
        icon: 'error',
        title: 'Algo salió mal',
        text: 'Ingresa o selecciona los campos faltantes',
        heightAuto: false
      });
    }
  }

  // ------------------------- funciones para el llenado de los nombres de las escuelas
  getSuperiorNames(){
    const path = 'EscuelasSuperior'
    this.database.collection<Escuela>(path).valueChanges().subscribe(res =>{
      this.AllEscuelas = res;
      //console.log(this.AllEscuelas);
    });
  };// fin del método para las esucelas de nivel superior

  getMiddleNames(){
    this.database.collection<Escuela>('EscuelasMediaSuperior').valueChanges().subscribe(res=>{
      this.AllEscuelasMedias = res;
    });
  };

}; // fin del codigo del archivo ts