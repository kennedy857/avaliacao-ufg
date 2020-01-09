import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CadastreseRoutingModule } from './cadastrese-routing.module';
import { CadastreseComponent } from './cadastrese/cadastrese.component';

@NgModule({
  imports: [
    CommonModule,
    CadastreseRoutingModule
  ],
  declarations: [CadastreseComponent]
})
export class CadastreseModule { }



