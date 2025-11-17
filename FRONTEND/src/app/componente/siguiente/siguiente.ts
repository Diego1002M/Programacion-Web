import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AlertaService } from '../../services/alerta.service';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-siguiente',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './siguiente.html',
  styleUrls: ['./siguiente.css']
})
export class SiguienteComponent {

  alertas: any[] = [];
  
  nuevaAlerta = { 
    tipo: '', 
    descripcion: '', 
    origen: '' 
  };

  nuevoUsuario = {
    nombre: '',
    apellido: '',
    usuario: '',
    contrasena: '',
    dni: '',
    celular: ''
  };

  constructor(
    private router: Router,
    private alertaService: AlertaService,
    private usuarioService: UsuarioService
  ) {}

  ngOnInit(): void {
    this.cargarAlertas();
  }

  cargarAlertas(): void {
    this.alertaService.obtenerAlertas().subscribe({
      next: data => this.alertas = data,
      error: err => console.error('❌ Error al obtener alertas:', err)
    });
  }

  crearAlerta(): void {
    this.alertaService.crearAlerta(this.nuevaAlerta).subscribe({
      next: () => {
        alert('🚨 Alerta creada correctamente');
        this.nuevaAlerta = { tipo: '', descripcion: '', origen: '' };
        this.cargarAlertas();
      },
      error: err => console.error('❌ Error al crear alerta:', err)
    });
  }

  registrarUsuario(): void {
    this.usuarioService.registrarUsuario(this.nuevoUsuario).subscribe({
      next: () => {
        alert("✅ Usuario registrado correctamente");

        this.nuevoUsuario = {
          nombre: '',
          apellido: '',
          usuario: '',
          contrasena: '',
          dni: '',
          celular: ''
        };
      },
      error: err => console.error("❌ Error al registrar usuario:", err)
    });
  }

  irPagina3(): void {
    this.router.navigate(['/pagina3']);
  }
}
