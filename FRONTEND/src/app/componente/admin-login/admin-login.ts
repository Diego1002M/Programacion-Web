import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-admin-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './admin-login.html',
  styleUrls: ['./admin-login.css']
})
export class AdminLoginComponent {

  usuario = '';
  password = '';

  constructor(private router: Router) {}

  iniciarSesion() {

    if (this.usuario === 'admin' && this.password === 'admin123') {

      localStorage.setItem('rol', 'admin');
      alert("Acceso concedido ✔");

      // ✅ LIMPIAR CAMPOS DESPUÉS DE INICIAR SESIÓN
      this.usuario = '';
      this.password = '';

      this.router.navigate(['/admin']);

    } else {
      alert("❌ Credenciales incorrectas");

      // ❗ También limpiar si es incorrecto
      this.usuario = '';
      this.password = '';
    }
  }
}
