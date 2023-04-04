import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent {
  disable:boolean = false;
  color:string = "blue";
  texto:string = "mi munneca me hablo";
  img:string = "yoda2.jpg";
  ancho:number = 100;
  alto:number = 100;

  cambiar(){
    this.img = "yoda1.jpg";
    this.ancho = 200;
    this.alto = 400;
  }
}
