import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-carrusel',
  templateUrl: './carrusel.component.html',
  styleUrls: ['./carrusel.component.scss']
})
export class CarruselComponent implements OnInit {
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
  constructor(private _config: NgbCarouselConfig) {
    _config.interval = 2000;
    _config.pauseOnHover = true;
    _config.showNavigationArrows = false;
  }

  ngOnInit(): void {
  }

}
