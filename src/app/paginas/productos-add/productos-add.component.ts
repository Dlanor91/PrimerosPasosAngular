import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CategoriasResponse } from 'src/app/Interfaces/categorias_response';
import { ProductosRequest } from 'src/app/Interfaces/productos_request';
import { ApiRestService } from 'src/app/servicios/api-rest.service';
import { ValidaSelectDirectiveValidator } from 'src/app/validaciones/valida-select.directive';
import swal from 'sweetalert2';

@Component({
  selector: 'app-productos-add',
  templateUrl: './productos-add.component.html',
  styleUrls: ['./productos-add.component.css']
})
export class ProductosAddComponent implements OnInit{
  categorias:Array<CategoriasResponse>;
  formulario!: FormGroup;
  form = {
    nombre: '',
    descripcion: '',
    precio: '',
    stock: '',
    categorias_id: 1
  };
  constructor(private servicio: ApiRestService, private router: Router) { }

  ngOnInit(): void {
    this.formulario = new FormGroup({
      categorias_id: new FormControl(),
      nombre: new FormControl
        (
          this.form.nombre,
          [
            Validators.required,
            Validators.minLength(4)
          ]
        ),
      descripcion: new FormControl
        (
          this.form.descripcion,
          [
            Validators.required,
            Validators.minLength(4)
          ]
        ),
      precio: new FormControl
        (
          this.form.precio,
          [
            Validators.required,
            Validators.minLength(3),
            Validators.pattern("^[0-9]*$"),
          ]
        ),
      stock: new FormControl
        (
          this.form.stock,
          [
            Validators.required,
            Validators.pattern("^[0-9]*$"),
          ]
        )


    }, { validators: ValidaSelectDirectiveValidator });
    this.getCategorias();
  }
  get nombre() { return this.formulario.get('nombre')!; }
  get descripcion() { return this.formulario.get('descripcion')!; }
  get precio() { return this.formulario.get('precio')!; }
  get stock() { return this.formulario.get('stock')!; }

  getCategorias() {
    this.servicio.getCategorias().subscribe({
      next: data => {
        this.categorias = data

      },
      error: error => {

        console.error('Error', error);
      }
    });
  }
  validaNumeros(e: any): boolean {
    const charCode = e.which ? e.which : e.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false
    }
    return true
  }
  enviar()
  {
    let modelo: ProductosRequest = 
    { 
      nombre: this.formulario.value.nombre, 
      descripcion: this.formulario.value.descripcion, 
      precio: this.formulario.value.precio, 
      stock: this.formulario.value.stock, 
      categorias_id: this.formulario.value.categorias_id 
    };
    this.servicio.addProductos(modelo).subscribe(
      {
        next:data=>
        {
          swal.fire({
            icon: 'success',
            timer: 5000,
            title: 'OK',
            text: "Se creó el registro exitosamente"
          });
          this.router.navigate(['/api/productos/add']).then(() => {
            window.location.reload();
          });
        },
        error:error=>
        {
          swal.fire({
            icon: 'error',
            title: 'Ops...',
            text: "Se produjo un error, por favor vuelve a intentalo"
          });
        }
      });
  }

}
