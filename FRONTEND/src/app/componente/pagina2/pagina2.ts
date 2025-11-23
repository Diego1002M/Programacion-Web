import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pagina2',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pagina2.html',
  styleUrls: ['./pagina2.css']
})
export class Pagina2 {

  ubicacionLista: boolean = false;
  ubicacionTexto: string = '';

  constructor(private router: Router) {}

  obtenerUbicacion() {
    if (!navigator.geolocation) {
      alert("⚠️ Tu navegador no soporta ubicación.");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const lat = pos.coords.latitude;
        const lon = pos.coords.longitude;

        this.ubicacionTexto = `Latitud: ${lat}, Longitud: ${lon}`;
        this.ubicacionLista = true;

        alert("📍 Ubicación obtenida correctamente");
      },
      (err) => {
        alert("❌ No se pudo obtener la ubicación. Asegúrate de permitir acceso.");
        this.ubicacionLista = false;
      }
    );
  }

  presionarAlerta() {
    if (!this.ubicacionLista) {
      alert("⚠️ Debes permitir la ubicación antes de enviar una alerta.");
      return;
    }

    localStorage.setItem('ubicacion', this.ubicacionTexto);
this.router.navigate(['/pagina3']);

  }

}
