import { Injectable } from '@angular/core';
import { Cliente } from './clientes/cliente';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import {environment} from '../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class ClientesService {
	apiURL:string = environment.apiURL
  constructor(private http : HttpClient) {}
  salvar(cliente :Cliente ):Observable<Cliente>{
    return this.http.post<Cliente>(this.apiURL,cliente);

  }
  getClientes() : Observable<Cliente[]>{
     return this.http.get<Cliente[]>(this.apiURL);
   }
   

}

