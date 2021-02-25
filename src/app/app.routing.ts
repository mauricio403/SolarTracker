//importar los modulos del router de angular

import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


//importar componentes a los cuales que quiero hacer una pagina exclusiva

import { MovimientoSolComponent } from './components/movimiento-sol/movimiento-sol.component';
import { CreditosComponent } from './components/creditos/creditos.component';
import { AppComponent } from './app.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { FabricacionComponent } from './components/fabricacion/fabricacion.component';


//array de rutas

const appRoutes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'inicio', component: InicioComponent },
  { path: 'creditos', component: CreditosComponent },
  { path: 'MovimientoSol', component: MovimientoSolComponent },
  { path: 'fabricacion', component: FabricacionComponent },
];

//exportar el modulo de rutas

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);
