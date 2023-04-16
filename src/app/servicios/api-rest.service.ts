import { Injectable } from '@angular/core';

//1ero importar el environment
import { environment } from 'src/environments/environment';

//2do el httpcliente y el httpheaders
import { HttpClient} from '@angular/common/http';

//e3ero modulo de observable para manejar multiples respuestas
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiRestService {
  api:string;
  cabecero = {
    'content-type': 'application/json',
    'Authorization':'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MzYsImlhdCI6MTY4MTU4NzM5NSwiZXhwIjoxNjg0MTc5Mzk1fQ.CLchFKrKUSZw1cm8GdWfYVvCUcYSWcJYXnrrdD-uDmM'
  };
  constructor(private http: HttpClient) 
  {   
    this.api=environment.api;
  }
  getCategorias():Observable<any>
  {
    return this.http.get(`${this.api}categorias`, {headers: this.cabecero});
  }
}