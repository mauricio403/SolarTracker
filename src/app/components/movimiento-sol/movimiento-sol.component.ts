import { ArduinoService } from './../../services/arduino.service';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-movimiento-sol',
  templateUrl: './movimiento-sol.component.html',
  styleUrls: ['./movimiento-sol.component.scss'],
  providers: [ArduinoService]
})
export class MovimientoSolComponent implements OnInit {
  data = {};
  value = "10°0'0 N ";
  titulo = new Date();
  constructor(private _arduinoService: ArduinoService) {

  }
  ngOnInit(): void {
    this.obtenerDatosArduino();
  }

  obtenerDatosArduino() {
    setInterval(() => {
      this._arduinoService.getDatosArduino().subscribe(
        response => {
          console.log(response.ldrs)
          console.log(response.servos)
          console.log(response.promedios)
          this.data = response
        },
        error => {
          console.log(error)
        }
      );

    }, 1000)
  }


}
