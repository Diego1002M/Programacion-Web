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
    { img: 'assets/alertas/robo.webp', texto: 'Robo o asalto' },
    { img: 'assets/alertas/incendio.avif', texto: 'Incendio' },
    { img: 'assets/alertas/accidente.png', texto: 'Accidente de tránsito' },
    { img: 'assets/alertas/violencia.png', texto: 'Violencia doméstica' },
    { img: 'assets/alertas/emergencia.png', texto: 'Emergencia médica' },
    { img: 'assets/alertas/Sospechoso.png', texto: 'Persona sospechosa' },
    { img: 'assets/alertas/Secuestro.png', texto: 'Secuestro' },
    { img: 'assets/alertas/Extorsión.png', texto: 'Extorsión' },
    { img: 'assets/alertas/Otros.png', texto: 'Otro tipo de emergencia' }
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
        this.router.navigate(['/pagina4']); // ← siguiente página
      },
      error: (err) => console.error(err)
    });
  }

  // 🔧 MÉTODO FALTANTE (aquí estaba el error)
  irInicio() {
    this.router.navigate(['/inicio']);
  }
}
