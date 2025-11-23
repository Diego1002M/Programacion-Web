// src/app/services/alerta.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlertaService {

  private apiUrl = 'http://127.0.0.1:8000/api/alertas';

  constructor(private http: HttpClient) {}

  obtenerAlertas(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
  

  crearAlerta(alerta: any): Observable<any> {
    return this.http.post(this.apiUrl, alerta);
  }
}
