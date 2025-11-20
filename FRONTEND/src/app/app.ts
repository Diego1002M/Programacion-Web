import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InicioComponent } from './componente/inicio/inicio';
import { SiguienteComponent } from './componente/siguiente/siguiente';
import { Pagina3 } from './componente/pagina3/pagina3';
import { Pagina4Component } from './componente/pagina4/pagina4';  // <-- ¡AGREGAR ESTO!
import { Menu } from './componente/menu/menu';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    InicioComponent,
    SiguienteComponent,
    Pagina3,
    Pagina4Component,   // <-- ¡AGREGAR ESTO!
    Menu,
    HttpClientModule
  ],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('frontend');
}
