import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // 👈 IMPORTANTE

@Component({
  selector: 'app-pagina3',
  standalone: true,
  imports: [CommonModule], // 👈 AGREGA ESTO
  templateUrl: './pagina3.html',
  styleUrls: ['./pagina3.css']
})
export class Pagina3 {
  opcionSeleccionada: number | null = null;

  opciones = [
    { img: 'assets/robo.png', texto: 'Robo o asalto' },
    { img: 'assets/incendio.png', texto: 'Incendio' },
    { img: 'assets/accidente.png', texto: 'Accidente de tránsito' },
    { img: 'assets/violencia.png', texto: 'Violencia doméstica' },
    { img: 'assets/emergencia.png', texto: 'Emergencia médica' },
    { img: 'assets/sospechoso.png', texto: 'Persona sospechosa' },
    { img: 'assets/animal.png', texto: 'Animal peligroso' },
    { img: 'assets/corte.png', texto: 'Corte de luz o agua' },
    { img: 'assets/otro.png', texto: 'Otro tipo de emergencia' },
  ];

  seleccionarOpcion(index: number) {
    this.opcionSeleccionada = index;
  }

  enviarAlerta() {
    if (this.opcionSeleccionada !== null) {
      const alerta = this.opciones[this.opcionSeleccionada];
      console.log('🚨 Alerta registrada:', alerta.texto);
      // llamar a FastAPI xddd

    } else {
      alert('Por favor, selecciona una opción antes de continuar.');
    }
  }
}
