import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Produto } from './models/Produto.model';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  private url = "http://localhost:3000/produtos";

  constructor(private __httpClient: HttpClient) { }

  getProduto(id: any): Observable<Produto>{
    const urlIdProduto = `${this.url}?id=${id}`;
    return this.__httpClient.get<Produto>(urlIdProduto);
  }

  getProdutos(): Observable<Produto[]>{
    return this.__httpClient.get<Produto[]>(this.url);
  }
  
  cadastrarProduto(produto: Produto): Observable<Produto[]>{
    return this.__httpClient.post<Produto[]>(this.url, produto);
  }

  atualizaProduto(id: any, produto:Produto): Observable<Produto[]>{
    const urlAttProduto = `${this.url}?${id}`;
    return this.__httpClient.put<Produto[]>(urlAttProduto, produto);
    
  }

  removerProduto(id:any): Observable<Produto[]>{
    const urlRemoverProduto = `${this.url}?id=${id}`;
    return this.__httpClient.delete<Produto[]>(urlRemoverProduto);
  }

}
