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

  // Variables para login (NO afectan tu diseño)
  email: string = '';
  password: string = '';

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

  // Validar campos vacíos
  if (
    !this.nuevoUsuario.nombre.trim() ||
    !this.nuevoUsuario.apellido.trim() ||
    !this.nuevoUsuario.usuario.trim() ||
    !this.nuevoUsuario.contrasena.trim() ||
    !this.nuevoUsuario.dni.trim() ||
    !this.nuevoUsuario.celular.trim()
  ) {
    alert("⚠️ Todos los campos son obligatorios");
    return;
  }

  // Validar DNI: 8 dígitos
  if (!/^\d{8}$/.test(this.nuevoUsuario.dni)) {
    alert("⚠️ El DNI debe tener exactamente 8 dígitos numéricos");
    return;
  }

  // Validar celular: 9 dígitos
  if (!/^\d{9}$/.test(this.nuevoUsuario.celular)) {
    alert("⚠️ El celular debe tener exactamente 9 dígitos numéricos");
    return;
  }

  // Si pasa todo → enviar al backend
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

  // ➜ REDIRECCIONAR DESPUÉS DEL REGISTRO
  this.router.navigate(['/pagina2']);
},

    error: err => console.error("❌ Error al registrar usuario:", err)
  });
}




  // ➕ Método LOGIN — Lógica agregada sin tocar tu estructura
  iniciarSesion(): void {

    if (!this.email || !this.password) {
      alert("⚠️ Completa todos los campos");
      return;
    }

    const datosLogin = {
      usuario: this.email,
      contrasena: this.password
    };

    this.usuarioService.login(datosLogin).subscribe({
      next: (respuesta: any) => {

        // Ajusta si tu backend devuelve otra estructura
        if (respuesta.success === true || respuesta.usuario) {
          alert("✅ Bienvenido");
          this.router.navigate(['/pagina2']);
        } else {
          alert("❌ Usuario o contraseña incorrectos");
        }
      },
      error: err => {
        console.error("❌ Error al iniciar sesión:", err);
        alert("❌ Usuario o contraseña incorrectos");
      }
    });
  }

}
