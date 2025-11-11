import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router'; // ✅ Importa Router

@Component({
  selector: 'app-pagina3',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pagina3.html',
  styleUrls: ['./pagina3.css']
})
export class Pagina3 {

  constructor(private router: Router) {} // ✅ Inyección de Router

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
      const alerta = this.opciones[this.opcionSeleccionada];
      console.log('🚨 Alerta registrada:', alerta.texto);
      // Aquí puedes conectar con tu backend FastAPI más adelante
    } else {
      alert('Por favor, selecciona una opción antes de continuar.');
    }
  }

  irInicio() {
    this.router.navigate(['/inicio']); // ✅ Navega al inicio
  }
}
