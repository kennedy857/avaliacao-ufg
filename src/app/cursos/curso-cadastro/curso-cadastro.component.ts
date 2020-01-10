import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { ErrorHandlerService } from './../../core/error-handler.service';

import { CursoService } from './../curso.service';
import { MensagensService } from './../../core/mensagens.service';

@Component({
  selector: 'app-curso-cadastro',
  templateUrl: './curso-cadastro.component.html',
  styleUrls: ['./curso-cadastro.component.css']
})
export class CursoCadastroComponent implements OnInit {

  formulario: FormGroup;
  
  constructor(
    private cursoService: CursoService,
    private errorHandler: ErrorHandlerService,
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private mensagensService: MensagensService,        
  ) { }

  ngOnInit() {
    this.formulario = this.formBuilder.group({
      nome: ['', Validators.required]  });
  }

  adicionarCurso() {
    this.cursoService.adicionar(this.formulario.value)
      .then(cursoAdicionado => {
        this.formulario.reset();
        this.mensagensService.add('Curso adicionado com sucesso!','Fechar','sucesso');    
        this.router.navigate(['/cursos']);
      })
      .catch(erro => this.errorHandler.handle(erro));
  }


}
