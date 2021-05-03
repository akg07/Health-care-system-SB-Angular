import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PatientService {

  constructor(private http: HttpClient) { }

  private baseUrl = 'http://localhost:8080/hms/api/patient';

  addPatient(patient: any): Observable<any>{
    return this.http.post(`${this.baseUrl}`, patient);
  }

  updatePatient(id: number, patient: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}`, patient);
  }

  deletePatient(id: number): Observable<any>{
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

  getAllPatient(): Observable<any>{
    return this.http.get(`${this.baseUrl}`);
  }

  getPatientById(id: number): Observable<any>{
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  checkIsAvailable(pat:any): Observable<any>{
    return this.http.post(`${this.baseUrl}/check`, pat);
  }


}
