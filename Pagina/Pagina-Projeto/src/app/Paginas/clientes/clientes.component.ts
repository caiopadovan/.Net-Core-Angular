import { Component, OnInit } from '@angular/core';
import { Cliente } from '../../Models/cliente.model';
import { ClienteServiçosService } from '../../serviços/cliente.serviços.service';
import { FormsModule } from '@angular/forms';
import { CommonModule, NgFor } from '@angular/common';

@Component({
  selector: 'app-clientes',
  standalone: true,
  imports: [FormsModule, NgFor, CommonModule],
  templateUrl: './clientes.component.html',
  styleUrl: './clientes.component.scss'
})
export class ClientesComponent implements OnInit{

  title='clientes';
  clientes: Cliente[] = [];
  cliente: Cliente;

  constructor(private clientesService : ClienteServiçosService){  }

  ngOnInit(): void {
  }

  //Função para buscar os clientes

  getAllClientes(){
    this.clientesService.getAllClientes()
    .subscribe(
      response => {
        this.clientes = response
      }
    )
  }

  deletarCliente(Clienteid: string) {
    this.clientesService.deletarCliente(Clienteid)
    .subscribe(
      response => {
        this.getAllClientes
      }
    )
  }

  updateCliente(cliente:Cliente) {
    this.clientesService.updateCliente(cliente)
    .subscribe(
      response =>{
        this.getAllClientes
      }
    );
  }
}
