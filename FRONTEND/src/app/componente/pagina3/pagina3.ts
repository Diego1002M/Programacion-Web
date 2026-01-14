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

  opcionSeleccionada: number | null = null;
  ubicacion: string = 'No registrada';

  constructor(
    private router: Router,
    private alertaService: AlertaService
  ) {
    // 🔥 Recuperar ubicación guardada desde pagina2
    this.ubicacion = localStorage.getItem('ubicacion') || 'No registrada';
  }

  opciones = [
    { img: 'asalto.png', texto: 'Robo o asalto' },
    { img: 'incendio.png', texto: 'Incendio' },
    { img: 'accidente.png', texto: 'Accidente de tránsito' },
    { img: 'violencia.png', texto: 'Violencia doméstica' },
    { img: 'emergencia.png', texto: 'Emergencia médica' },
    { img: 'sospechoso.png', texto: 'Persona sospechosa' },
    { img: 'secuestro.png', texto: 'Secuestro' },
    { img: 'extorcion.png', texto: 'Extorsión' },
    { img: 'otro.png', texto: 'Otro tipo de emergencia' }
  ];

  seleccionarOpcion(index: number) {
    this.opcionSeleccionada = index;
  }

  enviarAlerta() {
    if (this.opcionSeleccionada === null) {
      alert('Selecciona una opción.');
      return;
    }

    // 🔥 Ahora se envía también la ubicación
    const alerta = {
      tipo: this.opciones[this.opcionSeleccionada].texto,
      descripcion: 'Enviada desde el frontend Angular',
      origen: 'Frontend',
      ubicacion: this.ubicacion
    };

    this.alertaService.crearAlerta(alerta).subscribe({
      next: () => alert('✔ Alerta registrada'),
      error: (err) => console.error(err)
    });
  }

  iratras() {
    this.router.navigate(['/siguiente']);
  }
}
