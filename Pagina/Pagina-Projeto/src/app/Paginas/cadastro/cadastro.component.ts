import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Cliente } from '../../Models/cliente.model';
import { HttpClient } from '@angular/common/http';
import { ClienteServiçosService } from '../../serviços/cliente.serviços.service';
import { FormsModule } from '@angular/forms';
import { CommonModule, NgFor } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, NgFor,CommonModule],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.scss'
})
export class CadastroComponent implements OnInit{
  title='clientes';
  clientes: Cliente[] = [];
  cliente: Cliente = {
    ClienteID: '',
    Nome: '',
    Sobrenome:'',
    CPF:'',
    Cidade:'',
    Estado:'',
    Telefone:'',
    Senha:'',
  }

  cpf = "";
  senha = "";
  errormsg = "";
  mensagem:string;

  constructor(private clientesService : ClienteServiçosService){  }

  ngOnInit(): void {
  }

//Funções

//Confere se o CPF é válido através do calculo de seus números

  ValidarCPF(cpf: string) : boolean{
    if (typeof cpf !== "string") return false
    cpf = cpf.replace(/[\s.-]*/igm, '')
    if (
        !cpf ||
        cpf.length != 11 ||
        cpf == "00000000000" ||
        cpf == "11111111111" ||
        cpf == "22222222222" ||
        cpf == "33333333333" ||
        cpf == "44444444444" ||
        cpf == "55555555555" ||
        cpf == "66666666666" ||
        cpf == "77777777777" ||
        cpf == "88888888888" ||
        cpf == "99999999999" 
    ) {
        return false
    }
    var soma = 0
    var resto
    for (var i = 1; i <= 9; i++) 
        soma = soma + parseInt(cpf.substring(i-1, i)) * (11 - i)
    resto = (soma * 10) % 11
    if ((resto == 10) || (resto == 11))  resto = 0
    if (resto != parseInt(cpf.substring(9, 10)) ) return false
    soma = 0
    for (var i = 1; i <= 10; i++) 
        soma = soma + parseInt(cpf.substring(i-1, i)) * (12 - i)
    resto = (soma * 10) % 11
    if ((resto == 10) || (resto == 11))  resto = 0
    if (resto != parseInt(cpf.substring(10, 11) ) ) return false
    return true
}

  getAllClientes(){
    this.clientesService.getAllClientes()
    .subscribe(
      response => {
        this.clientes = response
      }
    )
  }

  updateForm(cliente: Cliente){
    this.cliente = cliente;
  }

  deletarCliente(id: string) {
    this.clientesService.deletarCliente(id)
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

  onSubmit(){
    this.clientesService.addCliente(this.cliente)
    .subscribe(
      response => {
        alert(0);
        console.log(response)
        this.cliente = {
          ClienteID: '',
          Nome: '',
          Sobrenome:'',
          CPF:'',
          Cidade:'',
          Estado:'',
          Telefone:'',
          Senha:'',
        }
      }
    )
  }
}