import { Routes } from '@angular/router';
import { InicioComponent } from './componente/inicio/inicio';
import { SiguienteComponent } from './componente/siguiente/siguiente';
import { Pagina3 } from './componente/pagina3/pagina3';
import { Pagina4Component } from './componente/pagina4/pagina4';  

export const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: 'inicio', component: InicioComponent },
  { path: 'siguiente', component: SiguienteComponent },
  { path: 'pagina3', component: Pagina3 },
   { path: 'pagina4', component: Pagina4Component },
  { path: '**', redirectTo: 'inicio' } // ← opcional: fallback
];
