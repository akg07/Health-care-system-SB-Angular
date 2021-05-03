import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }

  private baseUrl=' http://localhost:8080/hms/api/employee';

  addEmployee(employee: any): Observable<any>{
    return this.http.post(`${this.baseUrl}`, employee);

  }

  updateEmployee(id: number, employee: any): Observable<any>{
    return this.http.put(`${this.baseUrl}/${id}`, employee);

  }

  deleteEmployee(id: number): Observable<any>{
    return this.http.delete(`${this.baseUrl}/${id}`);

  }

  getAllEmployee(): Observable<any>{
    return this.http.get(`${this.baseUrl}`);
  }

  getEmployeeById(id:number): Observable<any>
  {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  check(employee: any): Observable<any>{
    return this.http.post(`${this.baseUrl}/check`, employee);

  }
}
