import { Injectable } from '@angular/core';


import * as moment from 'moment';

import { environment } from './../../environments/environment';
import { UfgHttp } from '../seguranca/ufg-http';

@Injectable()
export class DashboardService {

  url: string;

  constructor(private http: UfgHttp) {
    this.url = `${environment.apiUrl}/matriculas`;
  }

  buscarMatriculas(idAluno : number): Promise<any> {
    return this.http.get<any>(this.url+'/'+idAluno)
      .toPromise()
      .then(response => {
          return response;
      });
  }
}
