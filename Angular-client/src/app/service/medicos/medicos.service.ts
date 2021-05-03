import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MedicosService {

  constructor(private http: HttpClient) { }

  private baseUrl = 'http://localhost:8080/hms/api/medicos';

  addMedicos(medicos: any): Observable<any>{
    return this.http.post(`${this.baseUrl}`, medicos);
  }

  updateMedicos(id: number, medicos: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}`, medicos);
  }

  deleteMedicos(id: number): Observable<any>{
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

  getAllMedicos(): Observable<any>{
    return this.http.get(`${this.baseUrl}`);
  }

  getMedicosById(id: number): Observable<any>{
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  getMedicosByPatId(id: number): Observable<any>{
    return this.http.get(`${this.baseUrl}/pat/${id}`);
  }

  getTotal(id: number): Observable<any>{
    return this.http.get(`${this.baseUrl}/total/${id}`);
  }
}
