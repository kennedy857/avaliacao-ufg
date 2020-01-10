import { Injectable } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class MensagensService {

  constructor(    private snackBar: MatSnackBar
  ) { }


  add(message: string, action: string, tipo: string) {
    if(tipo === 'erro'){
      this.snackBar.open(message, action, {
        duration: 5000,
        verticalPosition: 'top',
        panelClass: ['mat-toolbar', 'mat-warn']
      });
    }
    if(tipo === 'sucesso'){
      this.snackBar.open(message, action, {
        duration: 5000,
        verticalPosition: 'top',
        panelClass: ['mat-toolbar', 'mat-primary']
      });
    }
}
}
