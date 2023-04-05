import { Component,OnInit} from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-formularios',
  templateUrl: './formularios.component.html',
  styleUrls: ['./formularios.component.css']
})
export class FormulariosComponent implements OnInit{
  constructor(private setearTitle:Title){}
  ngOnInit():void{
    this.cambiarTitulo("Curso Angular - Formularios");
  }

  public cambiarTitulo(titulo:string){
    this.setearTitle.setTitle(titulo);
  }
}
