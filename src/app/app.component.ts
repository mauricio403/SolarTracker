import { Component } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { MatSnackBar } from '@angular/material/snack-bar';
interface Valores {
  value: string;
  viewValue: string;
}



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'SolarTracker';

  imagenes: any[] = [
    {
      name: 'Amaneciendo',
      img: 'assets/2.png',
      desc: 'Amaneciendo en Quito'
    },
    {
      name: 'Medio dia',
      img: 'assets/3.png',
      desc: 'Anocheciendo en Quito'
    },
    {
      name: 'Atardecer',
      img: 'assets/4.png',
      desc: 'Anocheciendo en Quito'
    },
    {
      name: 'Anochecer',
      img: 'assets/1.png',
      desc: 'Anocheciendo en Quito'
    },
    {
      name: 'Arduino',
      img: 'assets/arduino.png',
      desc: 'Anocheciendo en Quito'
    }
  ];
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
}



