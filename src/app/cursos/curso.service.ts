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
}
