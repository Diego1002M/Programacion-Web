import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-siguiente',
  standalone: true,
  templateUrl: './siguiente.html',
  styleUrls: ['./siguiente.css']
})
export class SiguienteComponent {

  constructor(private router: Router) {}

irPagina3() {
    this.router.navigate(['/pagina3']);
  }

 }
