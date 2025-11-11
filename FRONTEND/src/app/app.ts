import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InicioComponent } from './componente/inicio/inicio';
import { SiguienteComponent } from './componente/siguiente/siguiente';
import { Pagina3 } from './componente/pagina3/pagina3';
import { Menu } from './componente/menu/menu';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, InicioComponent,SiguienteComponent,Pagina3,Menu],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('frontend');
}
