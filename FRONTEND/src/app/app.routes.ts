import { Routes } from '@angular/router';
import { InicioComponent } from './componente/inicio/inicio';
import { SiguienteComponent } from './componente/siguiente/siguiente';
import { Pagina3 } from './componente/pagina3/pagina3';
import { AdminComponent } from './componente/admin/admin';
import { AdminLoginComponent } from './componente/admin-login/admin-login';

export const routes: Routes = [

  { path: '', redirectTo: 'inicio', pathMatch: 'full' },

  { path: 'inicio', component: InicioComponent },
  { path: 'siguiente', component: SiguienteComponent },
  { path: 'pagina3', component: Pagina3 },

  {
    path: 'pagina2',
    loadComponent: () =>
      import('./componente/pagina2/pagina2').then(c => c.Pagina2)
  },

  {
    path: 'pagina4',
    loadComponent: () =>
      import('./componente/pagina4/pagina4').then(m => m.Pagina4)
  },

  // LOGIN ADMIN
  { path: 'admin-login', component: AdminLoginComponent },

  // PANEL ADMIN
  { path: 'admin', component: AdminComponent },

  { path: '**', redirectTo: 'inicio' }
];
