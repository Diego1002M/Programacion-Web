import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AlertaService } from '../../services/alerta.service';

@Component({
  selector: 'app-pagina3',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pagina3.html',
  styleUrls: ['./pagina3.css']
})
export class Pagina3 {

  constructor(
    private router: Router,
    private alertaService: AlertaService
  ) {}

  opcionSeleccionada: number | null = null;

  opciones = [
    { img: 'assets/robo.png', texto: 'Robo o asalto' },
    { img: 'assets/incendio.png', texto: 'Incendio' },
    { img: 'assets/accidente.png', texto: 'Accidente de tránsito' },
    { img: 'assets/violencia.png', texto: 'Violencia doméstica' },
    { img: 'assets/emergencia.png', texto: 'Emergencia médica' },
    { img: 'assets/sospechoso.png', texto: 'Persona sospechosa' },
    { img: 'assets/animal.png', texto: 'Secuestro' },
    { img: 'assets/corte.png', texto: 'Extorsión' },
    { img: 'assets/otro.png', texto: 'Otro tipo de emergencia' }
  ];

  seleccionarOpcion(index: number) {
    this.opcionSeleccionada = index;
  }

  enviarAlerta() {
    if (this.opcionSeleccionada === null) {
      alert('Selecciona una opción.');
      return;
    }

    const alerta = {
      tipo: this.opciones[this.opcionSeleccionada].texto,
      descripcion: 'Enviada desde el frontend Angular',
      origen: 'Frontend'
    };

    this.alertaService.crearAlerta(alerta).subscribe({
      next: () => alert('✔ Alerta registrada'),
      error: (err) => console.error(err)
    });
  }

  irInicio() {
    this.router.navigate(['/inicio']);
  }
}
