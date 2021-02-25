import { ArduinoService } from './../../services/arduino.service';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-movimiento-sol',
  templateUrl: './movimiento-sol.component.html',
  styleUrls: ['./movimiento-sol.component.scss'],
  providers: [ArduinoService]
})
export class MovimientoSolComponent implements OnInit {

  value = "10°0'0 N ";
  titulo = new Date();
  constructor( private _arduinoService: ArduinoService) {
   
  }

  ngOnInit(): void {
    this._arduinoService.getDatosArduino().subscribe(
      response =>{
        console.log(response)
      },
      error =>{
        console.log(error)
      }
    );
  }

}
