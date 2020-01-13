import { Injectable } from '@angular/core';

import { environment } from './../../environments/environment';
import { Curso } from './../core/model';
import { CursoAlunoDTO } from './../core/model';
import { UfgHttp } from '../seguranca/ufg-http';

@Injectable({
  providedIn: 'root'
})
export class CursoService {

  url: string;
  
    constructor(private http: UfgHttp) {
      this.url = `${environment.apiUrl}/cursos`;
    }

    pesquisar(): Promise<any> {
      return this.http.get<any>(this.url)
        .toPromise()
        .then(response => {
            return response;
        });
    }
        
    consultarPorId(id: number): Promise<Curso> {
      return this.http.get<Curso>(this.url+'/'+id)
        .toPromise();
    }

    pesquisarCursosPublicos(): Promise<any> {
      return this.http.get<any>(this.url+'/publicos')
        .toPromise()
        .then(response => {
            return response;
        });
    }

    adicionar(curso: Curso): Promise<Curso> {
      return this.http.post<Curso>(this.url, curso)
        .toPromise();
    }

    excluir(id: number): Promise<Curso> {
      return this.http.delete<Curso>(this.url+'/'+id)
        .toPromise();
    }

    inscreva(cursoAlunoDTO : CursoAlunoDTO): Promise<CursoAlunoDTO> {
      return this.http.post<CursoAlunoDTO>(this.url+'/inscreva', cursoAlunoDTO)
        .toPromise();
    }

    validarCPF(cpf: string): boolean {
      if (cpf == null) {
        return false;
      }
      if (cpf.length != 11) {
        return false;
      }
      if ((cpf == '00000000000') || (cpf == '11111111111') || (cpf == '22222222222') || (cpf == '33333333333') || (cpf == '44444444444') || (cpf == '55555555555') || (cpf == '66666666666') || (cpf == '77777777777') || (cpf == '88888888888') || (cpf == '99999999999')) {
        return false;
      }
      let numero: number = 0;
      let caracter: string = '';
      let numeros: string = '0123456789';
      let j: number = 10;
      let somatorio: number = 0;
      let resto: number = 0;
      let digito1: number = 0;
      let digito2: number = 0;
      let cpfAux: string = '';
      cpfAux = cpf.substring(0, 9);
      for (let i: number = 0; i < 9; i++) {
        caracter = cpfAux.charAt(i);
        if (numeros.search(caracter) == -1) {
          return false;
        }
        numero = Number(caracter);
        somatorio = somatorio + (numero * j);
        j--;
      }
      resto = somatorio % 11;
      digito1 = 11 - resto;
      if (digito1 > 9) {
        digito1 = 0;
      }
      j = 11;
      somatorio = 0;
      cpfAux = cpfAux + digito1;
      for (let i: number = 0; i < 10; i++) {
        caracter = cpfAux.charAt(i);
        numero = Number(caracter);
        somatorio = somatorio + (numero * j);
        j--;
      }
      resto = somatorio % 11;
      digito2 = 11 - resto;
      if (digito2 > 9) {
        digito2 = 0;
      }
      cpfAux = cpfAux + digito2;
      if (cpf != cpfAux) {
        return false;
      }
      else {
        return true;
      }
    }
}
