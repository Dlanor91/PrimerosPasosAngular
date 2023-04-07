import { Component } from '@angular/core';
import { ChartType } from 'angular-google-charts';

@Component({
  selector: 'app-graficos',
  templateUrl: './graficos.component.html',
  styleUrls: ['./graficos.component.css']
})
export class GraficosComponent {
  titulo='Mi Grafico';
  datos =[
    ['JavaScript',1200],
    ['Angular',1500],
    ['Vue',1400],
    ['Python',1000],
    ['C#',1800]
  ]

  columnas = ['Lenguajes','Profesionales']
  opciones={
    colors:['red','blue','green','#E9967A','#f6c7b6'],
    is3D:true
  };
  tipo: ChartType = ChartType.PieChart;
 //tipo: ChartType = ChartType.AreaChart;
  //tipo: ChartType = ChartType.Gauge;

}
