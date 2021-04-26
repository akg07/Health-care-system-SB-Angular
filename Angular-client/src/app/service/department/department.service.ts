import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  constructor(private http: HttpClient) { }

  private baseUrl='http://localhost:8080/hms/api/department';

  addDepartment(department: any): Observable<any>{
    return this.http.post(`${this.baseUrl}`, department);

  }

  updateDepartment(id: number, department: any): Observable<any>{
    return this.http.put(`${this.baseUrl}/${id}`, department);

  }

  deleteDepartment(id: number): Observable<any>{
    return this.http.delete(`${this.baseUrl}/${id}`);

  }

  getAllDepartment(): Observable<any>{
    return this.http.get(`${this.baseUrl}`);
  }

  getDepartmentById(id:number): Observable<any>
  {
    return this.http.get(`${this.baseUrl}/${id}`);
  }
}
