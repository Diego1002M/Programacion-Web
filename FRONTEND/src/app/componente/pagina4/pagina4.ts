import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pagina4',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pagina4.html',
  styleUrls: ['./pagina4.css']
})
export class Pagina4Component {

  constructor(private router: Router) {}

  irInicio() {
    this.router.navigate(['/inicio']);
  }

  irIncidentes() {
    this.router.navigate(['/siguiente']); // O donde tú quieras
  }
}
