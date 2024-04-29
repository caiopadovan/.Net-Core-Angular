import { Routes } from '@angular/router';
import path from 'path';
import { LoginComponent } from './Paginas/login/login.component';
import { HomeComponent } from './Paginas/home/home.component';
import { CadastroComponent } from './Paginas/cadastro/cadastro.component';
import { ProdutosComponent } from './Paginas/produtos/produtos.component';
import { ClientesComponent } from './Paginas/clientes/clientes.component';
import { PedidosComponent } from './Paginas/pedidos/pedidos.component';

export const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'login', component: LoginComponent},
    {path: 'home', component: HomeComponent},
    {path: 'cadastro', component: CadastroComponent},
    {path: 'produtos', component: ProdutosComponent},
    {path: 'clientes', component: ClientesComponent},
    {path: 'pedidos', component: PedidosComponent},
    {path: '**', component: HomeComponent},
];