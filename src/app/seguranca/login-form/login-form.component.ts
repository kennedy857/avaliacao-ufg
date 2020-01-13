import { Router } from '@angular/router';
import { Component, OnInit} from '@angular/core';

import { ErrorHandlerService } from './../../core/error-handler.service';
import { AuthService } from './../auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TestBed } from '@angular/core/testing';
import { CadatreseService } from './../cadatrese.service';
import { MensagensService } from './../../core/mensagens.service';

import { CursoService } from './../../cursos/curso.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  
  loginForm: FormGroup;
  formulario: FormGroup;

  cursos = [];
  displayedColumns: string[] = ['nome'];

  constructor(
    private auth: AuthService,
    private errorHandler: ErrorHandlerService,
    private router: Router,
    private formBuilder: FormBuilder,
    private cadatreseService: CadatreseService,
    private mensagensService: MensagensService,
    private cursoService: CursoService,
  ) { }

  ngOnInit() {
    this.pesquisarCursosPublicos();

    this.loginForm = this.formBuilder.group({
      usuario: ['', Validators.required],
      senha: ['', Validators.required]
    });

    this.formulario = this.formBuilder.group({
      codigo: ['', Validators.required],
      cpf: ['', Validators.required],
      senha: ['', Validators.required],
      nome: ['', Validators.required],
      admin: ['', Validators.required]
    });


  }
  get f() { return this.loginForm.controls; }

  login() {

    if (this.loginForm.invalid) {
      return;
    }

    this.auth.login(this.f.usuario.value, this.f.senha.value)
      .then(() => {
        this.router.navigate(['/dashboard']);
      })
      .catch(erro => {
        this.errorHandler.handle(erro);
      });
  }


  adicionarUsuario() {
    this.cadatreseService.adicionar(this.formulario.value)
      .then(usuarioAdicionado => {
        this.formulario.reset();
        this.mensagensService.add('Seu cadastro foi realizado com sucesso!', 'Fechar', 'sucesso');
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  pesquisarCursosPublicos() {
    this.cursoService.pesquisarCursosPublicos()
      .then(resultado => {
        this.cursos = resultado;
        console.log(this.cursos);
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  
 validarCPF(cpf: string){

  if(!this.cursoService.validarCPF(cpf)){
    this.mensagensService.add('O CPF informado é invalido !', 'Fechar', 'erro');
    this.formulario.reset();    
  }
 }
}
