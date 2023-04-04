import { Component } from '@angular/core';

@Component({
  selector: 'app-ciclo-de-vida',
  templateUrl: './ciclo-de-vida.component.html',
  styleUrls: ['./ciclo-de-vida.component.css']
})
export class CicloDeVidaComponent {

  texto:string = "texto inicial";


  constructor(){
    console.log("se ejecuta de primero.");
  }

  ngOnInit():void{
    console.log("se ejecuta luego del cosntructor.");
  }

  ngDoCheck():void{
    console.log("se ejecuta el metodo ngDoCheck cuando es afectado por algun cambio.");
  }

  ngOnDestroy():void{
    alert("cierre");
  }

  cambiarTexto(){
    this.texto = "otro valor con mas texto.";
    console.log("ejecucion en el ngDoCheck cambiando el texto")
  }

}
