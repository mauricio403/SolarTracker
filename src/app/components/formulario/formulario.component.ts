import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';


interface Valores {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {
  valores: Valores[] = [
    { value: 'uno-1', viewValue: '1' },
    { value: 'dos-2', viewValue: '2' },
    { value: 'tres-3', viewValue: '3' },
    { value: 'cuatro-4', viewValue: '4' },
    { value: 'cinco-5', viewValue: '5' },
    { value: 'seis-6', viewValue: '6' },
    { value: 'siete-7', viewValue: '7' },
    { value: 'ocho-8', viewValue: '8' },
    { value: 'nueve-9', viewValue: '9' },
    { value: 'diez-10', viewValue: '10' }
  ];
  constructor(private _snackBar: MatSnackBar) { }
  openSnackBar(placa: string, valor2: string) {
    this._snackBar.open(placa, valor2, {
      duration: 2000,
    });
  }
  ngOnInit(): void {
  }

}
