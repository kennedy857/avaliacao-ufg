import { Injectable } from '@angular/core';

import { environment } from './../../environments/environment';
import { Usuario } from './../core/model';
import { UfgHttp } from '../seguranca/ufg-http';

@Injectable({
  providedIn: 'root'
})
export class CadatreseService {

  url: string;
  
    constructor(private http: UfgHttp) {
      this.url = `${environment.apiUrl}/usuarios`;
    }

    
    adicionar(usuario: Usuario): Promise<Usuario> {
      return this.http.postSemToken<Usuario>(this.url, usuario)
        .toPromise();
    }
}
