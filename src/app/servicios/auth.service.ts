import { Injectable } from '@angular/core';
//1ero importar el environment
import { environment } from 'src/environments/environment';

//2do el httpclientes
import { HttpClient} from '@angular/common/http';

//e3ero modulo de observable para manejar multiples respuestas
import { Observable } from 'rxjs';

//Interfaces
import { RegistroRequest } from '../Interfaces/registro_request';
import { LoginRequest } from '../Interfaces/login_request';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  api: string;
  constructor(private http: HttpClient) 
  {
    this.api = environment.api;
  }

  //aqui no hay authenticacion
  login(modelo: LoginRequest): Observable<any> {
    return this.http.post(`${this.api}login`, modelo);
  }
  registro(modelo: RegistroRequest): Observable<any>
  {
    return this.http.post(`${this.api}registro`, modelo);
  }
  
}
