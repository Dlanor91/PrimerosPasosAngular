import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-acceso-restringido',
  templateUrl: './acceso-restringido.component.html',
  styleUrls: ['./acceso-restringido.component.css']
})
export class AccesoRestringidoComponent implements OnInit{
  nombre:string;
  constructor(private cookieService:CookieService, private router: Router){

  }

  ngOnInit(): void {
    this.nombre = this.cookieService.get('var_nombre');
  }

  salir(){
    this.cookieService.deleteAll();
    swal.fire({
      position:'top-end',
      timer:5000,
      icon:'success',
      title:'Ok',
      text:"Cerraste sesión exitosamente."
    });
    this.router.navigate(['/login'])
      .then(() => {
        window.location.reload();
      });
  }
}
