import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

import { NotAuthenticatedError } from './../seguranca/ufg-http';
import { MensagensService } from './mensagens.service';

@Injectable()
export class ErrorHandlerService {

  constructor(
    private mensagensService: MensagensService,
    private router: Router,
  ) { }

  handle(errorResponse: any) {
    let msg: string;

    if (typeof errorResponse === 'string') {
      msg = errorResponse;

    } else if (errorResponse instanceof NotAuthenticatedError) {
      msg = 'Sua sessão expirou!';
      this.router.navigate(['/login']);

    } else if (errorResponse instanceof HttpErrorResponse
        && errorResponse.status >= 400 && errorResponse.status <= 499) {
      msg = 'Ocorreu um erro ao processar a sua solicitação,';

      if (errorResponse.status === 403) {
        msg = 'Você não tem permissão para executar esta ação,';
      }

      if (errorResponse.status === 400) {
        msg = 'Usuário e/ou senha incorretos ou inexistente.';
      }

      try {
        msg = errorResponse.error[0].mensagemUsuario;
      } catch (e) { }

      console.error('Ocorreu um erro', errorResponse);

    } else {
      msg = errorResponse.error.message;
      console.error('Ocorreu um erro', errorResponse);
    }

    this.mensagensService.add(msg,'','erro');
    
  }


}
