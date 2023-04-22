import { Injectable } from '@angular/core';

//1ero importar el environment
import { environment } from 'src/environments/environment';

//2do el httpcliente
import { HttpClient} from '@angular/common/http';

//e3ero modulo de observable para manejar multiples respuestas
import { Observable } from 'rxjs';

//interfaz para add
import { CategoriasRequest } from '../Interfaces/categorias_request';
import { ProductosRequest } from '../Interfaces/productos_request';

@Injectable({
  providedIn: 'root'
})
export class ApiRestService {
  api:string;
  cabecero = {
    'content-type': 'application/json',
    'Authorization':'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MzYsImlhdCI6MTY4MTU4NzM5NSwiZXhwIjoxNjg0MTc5Mzk1fQ.CLchFKrKUSZw1cm8GdWfYVvCUcYSWcJYXnrrdD-uDmM'
  };

  //para upload sin content-type
  cabecero_upload = {    
    'Authorization':'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MzYsImlhdCI6MTY4MTU4NzM5NSwiZXhwIjoxNjg0MTc5Mzk1fQ.CLchFKrKUSZw1cm8GdWfYVvCUcYSWcJYXnrrdD-uDmM'
  };
  constructor(private http: HttpClient) 
  {   
    this.api=environment.api;
  }

  //Categorias
  getCategorias():Observable<any>
  {
    return this.http.get(`${this.api}categorias`, {headers: this.cabecero});
  }

  getCategoriasPorId(id:any):Observable<any>
  {
    return this.http.get(`${this.api}categorias/${id}`, {headers: this.cabecero});
  }

  addCategorias(modelo:CategoriasRequest):Observable<any>
  {
    return this.http.post(`${this.api}categorias`,modelo,{headers: this.cabecero});
  }

  editCategorias(modelo:CategoriasRequest, id:any):Observable<any>
  {
    return this.http.put(`${this.api}categorias/${id}`,modelo,{headers: this.cabecero});
  }

  deleteCategorias(id:any):Observable<any>
  {
    return this.http.delete(`${this.api}categorias/${id}`, {headers: this.cabecero});
  }

  getCategoriasPorSlug(slug:any):Observable<any>
  {
    return this.http.get(`${this.api}categorias-slug/${slug}`, {headers: this.cabecero});
  }

  //Productos
  getProductos(page:any):Observable<any>
  {
    return this.http.get(`${this.api}productos?page=${page}`, {headers: this.cabecero});
  }

  getProductosCategoria(slug:any, page:any):Observable<any>
  {
    return this.http.get(`${this.api}productos-buscar/${slug}?page=${page}`, {headers: this.cabecero});
  }
  
  getProductosBuscar(page:any, search:any):Observable<any>
  {
    return this.http.get(`${this.api}productos-buscar?page=${page}&search=${search}`, {headers: this.cabecero});
  }

  addProductos(modelo:ProductosRequest):Observable<any>
  {
    return this.http.post(`${this.api}productos`,modelo, {headers: this.cabecero});
  }

  getProductosPorId(id:any):Observable<any>
  {
    return this.http.get(`${this.api}productos/${id}`, {headers: this.cabecero});
  }

  editProductosId(modelo:ProductosRequest, id:any):Observable<any>
  {
    return this.http.put(`${this.api}productos/${id}`,modelo, {headers: this.cabecero});
  }

  deleteProductos(id:any):Observable<any>
  {
    return this.http.delete(`${this.api}productos/${id}`, {headers: this.cabecero});
  }

  getProductosFotos(id:any):Observable<any>
  {
    return this.http.get(`${this.api}productos-fotos/${id}`, {headers: this.cabecero});
  }

  addProductosFotos(productos_id:any,imagen:any):Observable<any>
  {
    //variable para archivos
    let formData = new FormData();

    //parametros
    formData.append('imagen',imagen);
    formData.append('productos_id',productos_id)

    return this.http.post(`${this.api}productos-fotos`,formData, {headers: this.cabecero_upload});
  }

  deleteProductosFotos(id:any):Observable<any>{
    return this.http.delete(`${this.api}productos-fotos/${id}`,{headers: this.cabecero});
  }

}
