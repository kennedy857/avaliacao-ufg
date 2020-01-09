
import { Routes, RouterModule } from '@angular/router';

import { NgModule } from '@angular/core';

import { AuthGuard } from './../seguranca/auth.guard';

import { CadastreseComponent } from './cadastrese/cadastrese.component';



const routes: Routes = [
  {
    path: 'cadastrese',
    component: CadastreseComponent,
    canActivate: [AuthGuard],
    data: { roles: ['ROLE_USER'] }
  }
 
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class CadastreseRoutingModule { }
