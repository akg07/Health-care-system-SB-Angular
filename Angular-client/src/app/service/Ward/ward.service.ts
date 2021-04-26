import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WardService {

  constructor(private http: HttpClient) { }

  private baseUrl = 'http://localhost:8080/hms/api/ward';

  addWard(ward: any): Observable<any>{
    return this.http.post(`${this.baseUrl}`, ward);
  }

  updateWard(id: number, ward: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}`, ward);
  }

  deleteWard(id: number): Observable<any>{
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

  getAllWard(): Observable<any>{
    return this.http.get(`${this.baseUrl}`);
  }

  getWardById(id: number): Observable<any>{
    return this.http.get(`${this.baseUrl}/${id}`);
  }
}
