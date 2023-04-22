import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegistroRequest } from 'src/app/Interfaces/registro_request';
import { AuthService } from 'src/app/servicios/auth.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-acceso-registro',
  templateUrl: './acceso-registro.component.html',
  styleUrls: ['./acceso-registro.component.css']
})
export class AccesoRegistroComponent implements OnInit{
  formulario!:FormGroup;

  form = {
    nombre:'',
    correo:'',
    password:''
  }

  constructor(private service: AuthService, private router:Router){

  }

  ngOnInit(): void {
      this.formulario = new FormGroup({
        nombre: new FormControl(
          this.form.nombre,[
            Validators.required,
            Validators.minLength(4),
        ]),
        correo: new FormControl(
          this.form.nombre,[
            Validators.required,
            Validators.minLength(4),
            Validators.pattern("^[a-z0-9.%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")
        ]),
        password: new FormControl(
          this.form.nombre,[
            Validators.required,
            Validators.minLength(4), 
            Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{6,20}$')         
        ]),
      });
  }

  get nombre() { return this.formulario.get('nombre')!; }
  get correo() { return this.formulario.get('correo')!; }
  get password() { return this.formulario.get('password')!; }

  enviar(){
    let modelo: RegistroRequest = { nombre: this.formulario.value.nombre, correo: this.formulario.value.correo, password: this.formulario.value.password };
    this.service.registro(modelo).subscribe(
      {
        next:data=>
        {
          if(data.estado=='ok')
          {
            swal.fire({
              icon: 'success',
              title: 'OK',
              text: "Te has registrado exitosamente!!"
            });
          }else
          {
            swal.fire({
              icon: 'error',
              title: 'Ops...',
              text: "El E-Mail ingresado ya está siendo usado por otro usuario"
            });
          }
          this.router.navigate(['/registro']).then(() => {
            window.location.reload();
          });
        },
        error:error=>{
          swal.fire({
            icon: 'error',
            title: 'Ops...',
            text: "Se produjo un error, por favor vuelve a intentarlo. "
          });
          this.router.navigate(['/registro']).then(() => {
            window.location.reload();
          });
        }
      });
  }

}
