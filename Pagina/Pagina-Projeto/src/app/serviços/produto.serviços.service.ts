import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Produto } from '../Models/produto.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProdutoServiçosService {

  baseUrl = 'https://localhost:7187/api/Produto'

  constructor(private http: HttpClient) { }

    //Pegando todos os Produtos

    getAllProdutos(): Observable<Produto[]> {
      return this.http.get<Produto[]>(this.baseUrl);
    }

    //Pegando um Produto

    getProduto(id:string): Observable<Produto>{
      return this.http.get<Produto>(this.baseUrl)
    }
  
    //Adicionar mais Produtos
  
    addProduto(Produto:Produto): Observable<Produto>{
      Produto.ProdutoID = '00000000-0000-0000-0000-000000000000';
      return this.http.post<Produto>(this.baseUrl, Produto);
    }
  
    //Deletar o Produto
  
    deletarProduto(id: string): Observable<Produto>{
      return this.http.delete<Produto>(this.baseUrl + '/' + id);
    }
  
    //Update de Produto
  
    updateProduto(Produto: Produto): Observable<Produto>{
      return this.http.put<Produto>(this.baseUrl + '/' + Produto.ProdutoID, Produto)
    }
}
