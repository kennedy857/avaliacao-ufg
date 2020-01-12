import { Routes, RouterModule } from '@angular/router';

import { NgModule } from '@angular/core';

import { AuthGuard } from './../seguranca/auth.guard';

import { CursosPesquisaComponent } from './cursos-pesquisa/cursos-pesquisa.component';
import { CursoCadastroComponent } from './curso-cadastro/curso-cadastro.component';


const routes: Routes = [
  {
    path: '',
    component: CursosPesquisaComponent,
    canActivate: [AuthGuard],
    data: { roles: ['ROLE_ADMIN', 'ROLE_USER'] }
  }
   ,
  {
    path: 'novo',
    component: CursoCadastroComponent,
    canActivate: [AuthGuard],
    data: { roles: ['ROLE_ADMIN'] }
  },
  {
    path: ':codigo',
    component: CursoCadastroComponent,
    canActivate: [AuthGuard],
    data: { roles: ['ROLE_ADMIN'] }
  }
 
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class CursosRoutingModule { }
