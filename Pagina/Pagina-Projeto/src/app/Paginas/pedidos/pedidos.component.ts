import { Component, OnInit } from '@angular/core';
import { Pedido } from '../../Models/pedido.model';
import { PedidoServiçosService } from '../../serviços/pedido.serviços.service';
import { Produto } from '../../Models/produto.model';
import { Cliente } from '../../Models/cliente.model';
import { FormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-pedidos',
  standalone: true,
  imports: [FormsModule, NgFor],
  templateUrl: './pedidos.component.html',
  styleUrl: './pedidos.component.scss'
})
export class PedidosComponent implements OnInit{

  title='pedidos';
  pedidos: Pedido[] = [];
  pedido: Pedido;

  produtos: Produto[] = [];
  produto: Produto;

  clientes: Cliente[] = [];
  cliente: Cliente;

  constructor(private pedidoService : PedidoServiçosService){  }

  ngOnInit(): void {
  }

  //Função para buscar os clientes

  getAllPedidos(){
    this.pedidoService.getAllPedidos()
    .subscribe(
      response => {
        this.pedidos = response
      }
    )
  }

  updateForm(pedido: Pedido){
    this.pedido = pedido;
  }

  deletarPedido(PedidoID: string) {
    this.pedidoService.deletarPedido(PedidoID)
    .subscribe(
      response => {
        this.getAllPedidos
      }
    )
  }

  updatePedido(pedido:Pedido) {
    this.pedidoService.updatePedido(pedido)
    .subscribe(
      response =>{
        this.getAllPedidos
      }
    );
  }

}
