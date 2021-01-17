import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovimientoSolComponent } from './movimiento-sol.component';

describe('MovimientoSolComponent', () => {
  let component: MovimientoSolComponent;
  let fixture: ComponentFixture<MovimientoSolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovimientoSolComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovimientoSolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
