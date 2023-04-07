import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-moment',
  templateUrl: './moment.component.html',
  styleUrls: ['./moment.component.css']
})
export class MomentComponent implements OnInit{
  fecha = new Date();
  fechaCorta: any;
  diaNumero: any;  
  diaStringFinal:any;
  mesNumero: any;
  mesString:any;
  anio:any;
  hora:any;

  FechaDias:any;
  FechaMenosDias:any;
  FechaMes:any;
  FechaMenosMes:any;
  FechaAnio:any;
  FechaMenosAnio:any;

  ngOnInit(): void {
      this.ejecutar();
  }

  ejecutar(){
    moment.locale("es");
    this.fechaCorta = moment(this.fecha).format("DD/MM/yyyy HH:mm");
    this.diaNumero = moment(this.fecha).format('DD');
    let diaString = moment(this.fecha).format('dddd');
    diaString = diaString[0].toUpperCase() + diaString.slice(1);
    this.diaStringFinal = diaString;
    this.mesNumero = moment(this.fecha).format('MM');
    this.mesString = moment(this.fecha).format('MMMM');
    this.anio = moment(this.fecha).format('yyyy');

    //calculos
    this.FechaDias = moment(this.fecha).add(7,'days').format("DD/MM/yyyy");
    this.FechaMenosDias = moment(this.fecha).subtract(7,'days').format("DD/MM/yyyy");
    this.FechaMes = moment(this.fecha).add(7,'months').format("DD/MM/yyyy");
    this.FechaMenosMes = moment(this.fecha).subtract(7,'months').format("DD/MM/yyyy");
    this.FechaAnio = moment(this.fecha).add(7,'years').format("DD/MM/yyyy");
    this.FechaMenosAnio = moment(this.fecha).subtract(7,'years').format("DD/MM/yyyy");
  }
}
