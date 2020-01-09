import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { ErrorHandlerService } from './../../core/error-handler.service';
import { AuthService } from './../auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TestBed } from '@angular/core/testing';
import { CadatreseService } from './../cadatrese.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  loginForm: FormGroup;
  formulario: FormGroup;

  constructor(
    private auth: AuthService,
    private errorHandler: ErrorHandlerService,
    private router: Router,
    private formBuilder: FormBuilder,
    private cadatreseService: CadatreseService,
  ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
        usuario: ['', Validators.required],
        senha: ['', Validators.required]
    });

    this.formulario = this.formBuilder.group({
      codigo: ['', Validators.required],
      email: ['', Validators.required],
      senha: ['', Validators.required],
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
        alert('Seu cadastro foi realizado com sucesso!');
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

}
