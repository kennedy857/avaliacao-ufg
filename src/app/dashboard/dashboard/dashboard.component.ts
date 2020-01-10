import { Component, OnInit } from '@angular/core';
import { DecimalPipe } from '@angular/common';

import { DashboardService } from './../dashboard.service';
import { ErrorHandlerService } from './../../core/error-handler.service';
import { AuthService } from './../../seguranca/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  matriculas = [];
  displayedColumns: string[] = [ 'codigo','nome'];
  
  constructor(
    public auth: AuthService,
    private dashboardService: DashboardService,
    private errorHandler: ErrorHandlerService,
    
  ) { }

  ngOnInit() {
    this.buscarMatriculas(this.auth.jwtPayload.id);
  }

  buscarMatriculas(idAluno) {
        this.dashboardService.buscarMatriculas(idAluno)
          .then(resultado => {
            this.matriculas = resultado;
          })
          .catch(erro => this.errorHandler.handle(erro));
      }
 
}
