import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OperationService {

  constructor(private http: HttpClient) { }

  private baseUrl = 'http://localhost:8080/hms/api/operation';

  addOperation(operation: any): Observable<any>{
    return this.http.post(`${this.baseUrl}`, operation);
  }

  updateOperation(id: number, operation: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}`, operation);
  }

  deleteOperation(id: number): Observable<any>{
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

  getAllOperation(): Observable<any>{
    return this.http.get(`${this.baseUrl}`);
  }

  getOperationById(id: number): Observable<any>{
    return this.http.get(`${this.baseUrl}/${id}`);
  }
}
