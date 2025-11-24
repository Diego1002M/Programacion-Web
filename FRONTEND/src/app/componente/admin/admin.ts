import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';   // ✅ agrega esto
import { Router } from '@angular/router';
import { AlertaService } from '../../services/alerta.service';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [CommonModule, FormsModule],   // ✅ agrega FormsModule aquí
  templateUrl: './admin.html',
  styleUrls: ['./admin.css']
})
export class AdminComponent implements OnInit {

  alertas: any[] = [];

  constructor(
    private alertaService: AlertaService,
    private router: Router
  ) {}

  ngOnInit() {

    // 🔐 Primero verificar autorización
    if (localStorage.getItem('rol') !== 'admin') {
      alert("No tienes permisos para acceder.");
      this.router.navigate(['/inicio']);
      return; // ⛔ Detener todo
    }

    // Si pasa, recien carga las alertas
    this.cargarAlertas();
  }

  cargarAlertas() {
    this.alertaService.obtenerAlertas().subscribe({
      next: (data) => {
        console.log("📌 ALERTAS RECIBIDAS:", data);
        this.alertas = data;
      },
      error: (err) => console.error("Error al cargar alertas", err)
    });
  }

  eliminar(id: number) {
    if (!confirm("¿Seguro que deseas eliminar esta alerta?")) return;

    this.alertaService.eliminarAlerta(id).subscribe({
      next: () => {
        alert("Alerta eliminada");
        this.cargarAlertas();
      },
      error: (err) => console.error("Error eliminando alerta", err)
    });
  }

  salir() {
    localStorage.removeItem('rol');
    this.router.navigate(['/login']);
  }

    alertaEditando: any = null;

editar(id: number) {
  this.alertaEditando = this.alertas.find(a => a.id === id);
}

guardarEdicion() {
  this.alertaService.editarAlerta(this.alertaEditando.id, this.alertaEditando)
    .subscribe(() => {
      alert("Alerta actualizada");
      this.alertaEditando = null;
      this.cargarAlertas();
    });
}

}
