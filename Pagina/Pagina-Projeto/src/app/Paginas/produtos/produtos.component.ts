import { CommonModule, NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Produto } from '../../Models/produto.model';
import { ProdutoServiçosService } from '../../serviços/produto.serviços.service';
import { response } from 'express';

@Component({
  selector: 'app-produtos',
  standalone: true,
  imports: [FormsModule, NgFor, CommonModule],
  templateUrl: './produtos.component.html',
  styleUrl: './produtos.component.scss'
})
export class ProdutosComponent implements OnInit{

  

  title='produtos';
  produtos: Produto[] = [];
  produto: Produto;

  constructor(private produtosServices: ProdutoServiçosService){}

  ngOnInit(): void {
  }

   //Função para buscar os Produtos

   getAllProdutos(){
    this.produtosServices.getAllProdutos()
    .subscribe(
      response => {
        this.produtos = response
      }
    )
  }

  getProduto(ProdutoID:string){
    this.produtosServices.getProduto(ProdutoID)
    .subscribe(
      response =>{
        this.produto = response
      }
    )
  }

  addProduto(Produto: Produto){
    this.produtosServices.addProduto(Produto)
    .subscribe(
      response => {
        this.getAllProdutos
      }
    )
  }

  updateForm(Produto: Produto){
    this.produto = Produto;
  }

  deletarProduto(Produtoid: string) {
    this.produtosServices.deletarProduto(Produtoid)
    .subscribe(
      response => {
        this.getAllProdutos
      }
    )
  }

  updateProduto(Produto:Produto) {
    this.produtosServices.updateProduto(Produto)
    .subscribe(
      response =>{
        this.getAllProdutos
      }
    );
  }

}
