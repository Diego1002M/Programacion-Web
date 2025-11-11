import { Routes } from '@angular/router';
import { InicioComponent } from './componente/inicio/inicio';
import { SiguienteComponent } from './componente/siguiente/siguiente';
import { Pagina3 } from './componente/pagina3/pagina3';




export const routes: Routes = [

  { path: '', component: InicioComponent },
  { path: 'siguiente', component: SiguienteComponent },
  { path: 'pagina3', component: Pagina3 }
];
