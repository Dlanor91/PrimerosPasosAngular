import { Component,ViewChild,TemplateRef } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-formulario',
  templateUrl: './modal-formulario.component.html',
  styleUrls: ['./modal-formulario.component.css']
})
export class ModalFormularioComponent {
  @ViewChild("myModalConf",{static: false}) myModalConf: TemplateRef<any>;
  usuario:any;
  paises:Array<any>;
  
  constructor(private modalService: NgbModal){
    this.usuario={
      nombre:"",
      correo:"",
      telefono:"",
      direccion:"",
      pais:""  
    },
    this.paises = [
      {
        nombre: "Chile",
        dominio: "cl"
      },
      {
        nombre: "Uruguay",
        dominio: "uy"
      },
      {
        nombre: "Argentina",
        dominio: "ar"
      },
      {
        nombre: "Cuba",
        dominio: "cu"
      },
      {
        nombre: "Puerto Rico",
        dominio: "pr"
      },
    ]; 
  }

  abrir(){
    this.modalService.open(this.myModalConf,{size:'lg'});
  }  

  ngOnInit():void{    
  }

  enviar(){
    console.log(this.usuario.nombre + " | "+ this.usuario.correo);
  }

}
