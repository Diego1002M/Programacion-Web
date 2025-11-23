import { Component, OnInit } from '@angular/core';
import { AlertaService } from '../../services/alerta.service';

@Component({
  selector: 'app-pagina4',
  standalone: true,
  templateUrl: './pagina4.html',
  styleUrls: ['./pagina4.css']
})
export class Pagina4 implements OnInit {

  alertas: any[] = [];

  constructor(private alertaService: AlertaService) {}

  ngOnInit() {
    this.cargarAlertas();
  }

  cargarAlertas() {
    this.alertaService.obtenerAlertas().subscribe({
      next: (data) => {
        console.log("📌 ALERTAS RECIBIDAS:", data);
        this.alertas = data;
      },
      error: (e) => console.error("Error cargando alertas", e)
    });
  }
}
