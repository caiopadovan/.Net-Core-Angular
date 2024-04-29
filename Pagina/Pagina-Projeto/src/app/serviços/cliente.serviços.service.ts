import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cliente } from '../Models/cliente.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteServiçosService {

  baseUrl = 'https://localhost:7187/api/Cliente'

  constructor(private http: HttpClient) { }

  // Pegando todos os Clientes

  getAllClientes(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(this.baseUrl);
  }
  
  //Adicionar mais Clientes

  addCliente(cliente:Cliente): Observable<Cliente>{
    cliente.ClienteID = '00000000-0000-0000-0000-000000000000';
    return this.http.post<Cliente>(this.baseUrl, cliente);
  }

  //Deletar o Cliente

  deletarCliente(id: string): Observable<Cliente>{
    return this.http.delete<Cliente>(this.baseUrl + '/' + id);
  }

  //Update de Cliente

  updateCliente(cliente: Cliente): Observable<Cliente>{
    return this.http.put<Cliente>(this.baseUrl + '/' + cliente.ClienteID, cliente)
  }
}