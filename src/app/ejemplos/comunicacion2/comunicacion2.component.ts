import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-comunicacion2',
  templateUrl: './comunicacion2.component.html',
  styleUrls: ['./comunicacion2.component.css']
})
export class Comunicacion2Component {

    @Input() titulo:string;
    @Input() subtitulo:string;
}
