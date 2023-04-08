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
    this.mapbox.accessToken = environment.mapBoxToken;
  }

  buildMap(){
    this.map = new mapboxgl.Map({
      container:'map',
      style: this.style,
      zoom:15,
      center: [-70.6097749, -33.5312374],
      //pitch: 60,
      //bearing: -60, para dar relieve
      attributionControl:false
    }).addControl(new mapboxgl.AttributionControl({
      customAttribution: 'Map design by me'
    }));
    this.map.addControl(new mapboxgl.GeolocateControl({
      positionOptions: {
        enableHighAccuracy: true
      },
      trackUserLocation:true,
      showUserHeading: true
    }))
    this.map.addControl(
      new mapboxgl.NavigationControl(),
    );
  }
}
