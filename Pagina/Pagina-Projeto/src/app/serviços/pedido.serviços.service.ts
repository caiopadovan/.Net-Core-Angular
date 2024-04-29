import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pedido } from '../Models/pedido.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PedidoServiçosService {

  baseUrl = 'https://localhost:7187/api/Pedidos'

  constructor(private http: HttpClient) { }

  // Pegando todos os Clientes

  getAllPedidos(): Observable<Pedido[]> {
    return this.http.get<Pedido[]>(this.baseUrl);
  }

  //Adicionar mais Pedidos

  addPedido(Pedido:Pedido): Observable<Pedido>{
    Pedido.PedidoID = '00000000-0000-0000-0000-000000000000';
    return this.http.post<Pedido>(this.baseUrl, Pedido);
  }

  //Deletar o Pedido

  deletarPedido(id: string): Observable<Pedido>{
    return this.http.delete<Pedido>(this.baseUrl + '/' + id);
  }

  //Update de Pedido

  updatePedido(Pedido: Pedido): Observable<Pedido>{
    return this.http.put<Pedido>(this.baseUrl + '/' + Pedido.PedidoID, Pedido)
  }
}