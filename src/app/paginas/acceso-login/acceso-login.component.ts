import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/servicios/auth.service';
import swal from 'sweetalert2';

//guardar los datos del usuario
import { CookieService } from 'ngx-cookie-service';
import { LoginRequest } from 'src/app/Interfaces/login_request';

@Component({
  selector: 'app-acceso-login',
  templateUrl: './acceso-login.component.html',
  styleUrls: ['./acceso-login.component.css']
})
export class AccesoLoginComponent implements OnInit{

  formulario!: FormGroup;

  form = {
    correo: '',
    password: ''
  }; 
  constructor(
          private cookieService: CookieService, 
          private service: AuthService, 
          private router: Router
          ) { }

  ngOnInit(): void {
    this.formulario = new FormGroup(
      {
        correo: new FormControl(
          this.form.correo, [
          Validators.required,
          Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")
        ]),
        password: new FormControl(
          this.form.password, [
          Validators.required,
          Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{6,20}$')
        ])
      });
  }
  get correo() { return this.formulario.get('correo')!; }
  get password() { return this.formulario.get('password')!; }

  //variables que trabajan con el preloader
  boton_guardar_bool = 'block';
  loader_guardar_bool='none';
  enviar()
  {
    this.boton_guardar_bool = 'none';
    this.loader_guardar_bool = 'block';
    let modelo: LoginRequest = { correo: this.formulario.value.correo, password: this.formulario.value.password};
    this.service.login(modelo).subscribe(
      {
        next:data=>
        {
          if(data.estado=='ok')
          {
            //aqui guardo en el cookie
            this.cookieService.set('cesar_login', data.token, 1);
            this.cookieService.set('cesar_nombre', data.nombre, 1);
            window.location.href="/restringido";
          }else
          {
            swal.fire({
              icon: 'error',
              title: 'Ops...',
              text: "Las credenciales ingresadas no son válidas "
            });
            this.boton_guardar_bool = "block";
            this.loader_guardar_bool = "none";
            this.formulario.reset();
            this.router.navigate(['/login']);
          }
        },
        error:error=>
        {
          swal.fire({
            icon: 'error',
            title: 'Ops...',
            text: "Las credenciales ingresadas no son válidas "
          });
          this.boton_guardar_bool = "block";
          this.loader_guardar_bool = "none";
          this.formulario.reset();
          this.router.navigate(['/login']);
        }
      });
  }
}
