import { Component, OnInit } from '@angular/core';
import { MapasService } from 'src/app/servicios/mapas.service';

@Component({
  selector: 'app-mapas-gmapbox',
  templateUrl: './mapas-gmapbox.component.html',
  styleUrls: ['./mapas-gmapbox.component.css']
})
export class MapasGMapboxComponent implements OnInit{
  constructor(private map: MapasService){}

  ngOnInit(): void { 
     this.map.buildMap(); 
  }
}
