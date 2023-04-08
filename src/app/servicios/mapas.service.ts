import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import * as mapboxgl from 'mapbox-gl';

@Injectable({
  providedIn: 'root'
})
export class MapasService {

  mapbox = (mapboxgl as typeof mapboxgl);

  map:mapboxgl.Map;

  //seteo el tipo de mapa que debo cargar
  style = `mapbox://styles/mapbox/streets-v11`;
  lat = 43.1746;
  lng = -2.4125


  constructor() { 
    
  }

}
