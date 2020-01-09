import { Component, OnInit } from '@angular/core';

import { ErrorHandlerService } from './../../core/error-handler.service';

import { CursoService } from './../curso.service';
import { AuthService } from './../../seguranca/auth.service';

import { CursoAlunoDTO } from '../../core/model';



@Component({
  selector: 'app-cursos-pesquisa',
  templateUrl: './cursos-pesquisa.component.html',
  styleUrls: ['./cursos-pesquisa.component.css']
})
export class CursosPesquisaComponent implements OnInit {

  cursos = [];
  cursoAlunoDTO : CursoAlunoDTO = new CursoAlunoDTO;
  displayedColumns: string[] = ['codigo', 'nome','opcao'];
  
  
  constructor(
    public auth: AuthService,
    private cursoService: CursoService,
    private errorHandler: ErrorHandlerService,
  ) { }

  ngOnInit() {
    this.pesquisar();
  }

  pesquisar() {

    this.cursoService.pesquisar()
      .then(resultado => {
        this.cursos = resultado;
      })
      .catch(erro => this.errorHandler.handle(erro));
  }
  
  excluir(id) {
    
        this.cursoService.excluir(id)
          .then(resultado => {
            alert('curso excluído com sucesso!');
            this.pesquisar();
          })
          .catch(erro => this.errorHandler.handle(erro));
      }
    
    inscreva(idCurso, idAluno) {
      this.cursoAlunoDTO.codigoAluno = idAluno;
      this.cursoAlunoDTO.codigoCurso = idCurso;
      
          this.cursoService.inscreva(this.cursoAlunoDTO)
            .then(resultado => {
              alert('Inscrição realizada com sucesso!');
            })
            .catch(erro => this.errorHandler.handle(erro));
        }  
        

}


