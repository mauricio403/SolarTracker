import { Component, OnInit } from '@angular/core';
import { CargarScriptsService } from './../../cargar-scripts.service'
@Component({
  selector: 'app-movimiento-sol',
  templateUrl: './movimiento-sol.component.html',
  styleUrls: ['./movimiento-sol.component.scss']
})
export class MovimientoSolComponent implements OnInit {

  constructor(private _CargaScripts: CargarScriptsService) {
    _CargaScripts.Carga(["js/index"])
  }

  ngOnInit(): void {
  }

}
