import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//inicio servicio
import { CargarScriptsService } from './cargar-scripts.service';

//fin servicio

import { AppComponent } from './app.component';
import { routing, appRoutingProviders } from './app.routing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { AppMaterialModule } from './components/app-material/app-material.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DialogoComponent } from './components/dialogo/dialogo.component';
import { CreditosComponent } from './components/creditos/creditos.component';
import { MovimientoSolComponent } from './components/movimiento-sol/movimiento-sol.component';
import { BarraSuperiorComponent } from './components/barra-superior/barra-superior.component';
import { CarruselComponent } from './components/carrusel/carrusel.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { FabricacionComponent } from './components/fabricacion/fabricacion.component';
import { MenuLateralComponent } from './components/menu-lateral/menu-lateral.component';

 


@NgModule({
  declarations: [
    AppComponent,
    DialogoComponent,
    CreditosComponent,
    MovimientoSolComponent,
    BarraSuperiorComponent,
    CarruselComponent,
    FooterComponent,
    FormularioComponent,
    InicioComponent,
    FabricacionComponent,
    MenuLateralComponent,
    
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    NgbModule,
    FormsModule,
    routing
    
  ],
  providers: [appRoutingProviders, CargarScriptsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
