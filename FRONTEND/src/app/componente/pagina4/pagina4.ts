import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pagina4',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pagina4.html',
  styleUrls: ['./pagina4.css']
})
export class Pagina4 {

  constructor(private router: Router) {}

  irInicio() {
    this.router.navigate(['/inicio']);
  }

  irIncidentes() {
    this.router.navigate(['/siguiente']); 
  }
}
