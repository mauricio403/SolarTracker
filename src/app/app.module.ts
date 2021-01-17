import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppMaterialModule } from './components/app-material/app-material.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DialogoComponent } from './components/dialogo/dialogo.component';
import { CreditosComponent } from './components/creditos/creditos.component';
import { MovimientoSolComponent } from './components/movimiento-sol/movimiento-sol.component';



@NgModule({
  declarations: [
    AppComponent,
    DialogoComponent,
    CreditosComponent,
    MovimientoSolComponent,
    
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    NgbModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
