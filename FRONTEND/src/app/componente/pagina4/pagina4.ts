import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-pagina4',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pagina4.html',
  styleUrls: ['./pagina4.css']
})
export class Pagina4 implements OnInit {

  alertas: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.cargarAlertas();
  }

  cargarAlertas() {
    this.http.get('http://127.0.0.1:8000/api/alertas/')
      .subscribe({
        next: (data: any) => {
          this.alertas = data;
        },
        error: (e) => {
          console.error("Error cargando alertas:", e);
        }
      });
  }

}
