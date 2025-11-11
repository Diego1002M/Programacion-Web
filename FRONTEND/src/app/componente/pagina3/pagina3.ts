import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AlertaService } from '../../services/alerta.service'; // ✅ Import correcto

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
    private alertaService: AlertaService   // ✅ Inyección del servicio
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
    { img: 'assets/otro.png', texto: 'Otro tipo de emergencia' },
  ];

  seleccionarOpcion(index: number) {
    this.opcionSeleccionada = index;
  }

  enviarAlerta() {
    if (this.opcionSeleccionada !== null) {
      const alerta = {
        tipo: this.opciones[this.opcionSeleccionada].texto,
        descripcion: 'Enviada desde el frontend Angular',
        origen: 'Frontend'
      };

      // ✅ Enviar al backend
      this.alertaService.crearAlerta(alerta).subscribe({
        next: (res) => {
          console.log('🚨 Alerta enviada al backend:', res);
          alert('✅ Alerta registrada correctamente.');
        },
        error: (err) => {
          console.error('❌ Error al enviar alerta:', err);
          alert('Error al registrar la alerta.');
        }
      });
    } else {
      alert('Por favor, selecciona una opción antes de continuar.');
    }
  }

  irInicio() {
    this.router.navigate(['/inicio']);
  }
}
