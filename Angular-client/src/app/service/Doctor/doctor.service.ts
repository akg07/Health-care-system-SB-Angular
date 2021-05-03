import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  constructor(private http:HttpClient) { }

  private baseUrl ='http://localhost:8080/hms/api/doctor';
 
  addDoctor(doctor:any) :Observable<any>{
    return this.http.post(`${this.baseUrl}`,doctor);
  }

  updateDoctor(id:number,doctor:any) :Observable<any>{
    return this.http.put(`${this.baseUrl}/${id}`,doctor);
  }

  deleteDoctor(id:number) :Observable<any>{
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

  getAllDoctor():Observable<any>{
    return this.http.get(`${this.baseUrl}`);
  }

  getDoctorById(id:number) :Observable<any>{
    return this.http.get(`${this.baseUrl}/${id}`)
  }

  checkIsAvailable(doctor:any) :Observable<any>{
    return this.http.post(`${this.baseUrl}/check`, doctor);
  }
}
