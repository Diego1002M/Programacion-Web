import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InicioComponent } from './componente/inicio/inicio';
import { SiguienteComponent } from './componente/siguiente/siguiente';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, InicioComponent,SiguienteComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('frontend');
}
