import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';// estas 3 lineas siempre debemos ponerlas asi como estan para poder generar los pdf's
// decia pau que era mejor hacer cada metodo en la pagina que ocupenes, y concuerdo
import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
(<any>pdfMake).vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-panel-admin',
  templateUrl: './panel-admin.page.html',
  styleUrls: ['./panel-admin.page.scss'],
})
export class PanelAdminPage implements OnInit {

  constructor(private userService: UserService,
    private router : Router
    ) {

   }

  ngOnInit() {
  }

  signOut(){
    this.userService.logout()
    .then(()=>{
        this.router.navigate(['/login']);
    })
    .catch(error=> console.log(error));
  }


  //Prueba de funcionalidad para el generador del PDF
  getBase64Image(img) {
    var canvas = document.createElement("canvas");
    canvas.width = img.width;
    canvas.height = img.height;
    var ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0);
    var dataURL = canvas.toDataURL("image/png");
    return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
  }

  async pdf() {
    let var1 = 29183;
    let docDefinition = {
      content: [
        "Pruebas del pdf para impresion " + var1,
        {
          columns:[
            [
              {
                text: "Hola como estas",
                bold: true
              }// fin del primer renglon
            ]// fin de la primer columna
            ,[
              {
                text:"Probando probando probando",
                aligment: "center"
              }// fin del primer renglon de la segunda columna
            ]// fin de la segunda columna
          ]// fin de todas las columnas
        }
        // "cruando una nueva pagina para esto",
        // {
        //   image: this.getBase64Image(document.getElementById("logo_ittepic")),
        //   width: 200
        // },
        // "mas info brou "+ var1
      ]// fin del contenido del pdf
    };
    pdfMake.createPdf(docDefinition).open()
  };

}
