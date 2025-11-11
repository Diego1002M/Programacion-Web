import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AlertaService } from '../../services/alerta.service'; // 🔹 ruta correcta según tu estructura

@Component({
  selector: 'app-siguiente',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './siguiente.html',
  styleUrls: ['./siguiente.css']
})
export class SiguienteComponent {

  alertas: any[] = [];
  nuevaAlerta: any = { tipo: '', descripcion: '', origen: '' };

  constructor(
    private router: Router,
    private alertaService: AlertaService // ✅ sin errores
  ) {}

  ngOnInit(): void {
    this.cargarAlertas();
  }

  cargarAlertas(): void {
    this.alertaService.obtenerAlertas().subscribe({
      next: (data: any) => {
        this.alertas = data;
      },
      error: (error: any) => {
        console.error('Error al obtener alertas:', error);
      }
    });
  }

  crearAlerta(): void {
    this.alertaService.crearAlerta(this.nuevaAlerta).subscribe({
      next: (response: any) => {
        alert('✅ Alerta creada correctamente');
        this.nuevaAlerta = { tipo: '', descripcion: '', origen: '' };
        this.cargarAlertas();
      },
      error: (error: any) => {
        console.error('Error al crear alerta:', error);
      }
    });
  }

  irPagina3(): void {
    this.router.navigate(['/pagina3']);
  }
}
