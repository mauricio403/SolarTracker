import { Component } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
declare var extencion: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  
  

  constructor() { }

  ngOnInit(): void {
    
  }
 prueba() {
  extencion.prueba();
}

}






