import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';   // <---- AGREGAR
import { AlertaService } from '../../services/alerta.service';

@Component({
  selector: 'app-pagina3',
  standalone: true,
  imports: [CommonModule, HttpClientModule],   // <---- AGREGAR
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
    { img: 'assets/alertas/robo.webp', texto: 'Robo o asalto' },
    { img: 'assets/alertas/incendio.avif', texto: 'Incendio' },
    { img: 'assets/alertas/accidente.png', texto: 'Accidente de tránsito' },
    { img: 'assets/alertas/violencia.png', texto: 'Violencia doméstica' },
    { img: 'assets/alertas/emergencia.png', texto: 'Emergencia médica' },
    { img: 'assets/alertas/sospechoso.png', texto: 'Persona sospechosa' },
    { img: 'assets/alertas/secuestro.png', texto: 'Secuestro' },
    { img: 'assets/alertas/extorsion.png', texto: 'Extorsión' },
    { img: 'assets/alertas/otros.png', texto: 'Otro tipo de emergencia' }
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
      next: () => {
        alert('✔ Alerta registrada');
        this.router.navigate(['/pagina4']); // ← AHORA SÍ VA A FUNCIONAR
      },
      error: (err) => console.error(err)
    });
  }

  irInicio() {
    this.router.navigate(['/inicio']);
  }
}
