import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-movimiento-sol',
  templateUrl: './movimiento-sol.component.html',
  styleUrls: ['./movimiento-sol.component.scss'],
  
})
export class MovimientoSolComponent implements OnInit {

  value = "10°0'0 N ";
  titulo = new Date();
  constructor() {
    
  }

  ngOnInit(): void {
  }

}
