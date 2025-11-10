import { Routes } from '@angular/router';
import { InicioComponent } from './componente/inicio/inicio';
import { SiguienteComponent } from './componente/siguiente/siguiente';
import { Registro } from './componente/registro/registro';


export const routes: Routes = [

  { path: 'registro', component: Registro },
  { path: '', component: InicioComponent },
  { path: 'siguiente', component: SiguienteComponent },
  
];
