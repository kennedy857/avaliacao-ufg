import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursosPesquisaComponent } from './cursos-pesquisa/cursos-pesquisa.component';

import { CursosRoutingModule } from './cursos-routing.module';

import {MatExpansionModule} from '@angular/material/expansion';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material';
import { ReactiveFormsModule }    from '@angular/forms';
import {MatIconModule} from '@angular/material';



import { CursoCadastroComponent } from './curso-cadastro/curso-cadastro.component';

@NgModule({
  imports: [
    CommonModule,
    CursosRoutingModule,
    MatExpansionModule,
    MatTableModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatIconModule,
  ],
  declarations: [
    CursosPesquisaComponent,
    CursoCadastroComponent,
    CursoCadastroComponent
  ]
})
export class CursosModule { }
