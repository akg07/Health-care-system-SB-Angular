import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpecializationService {

  constructor(private http:HttpClient) { }

  private baseUrl ='http://localhost:8080/hms/api/spec';

  addSpecialization(specialization:any) :Observable<any>{
    return this.http.post(`${this.baseUrl}`,specialization);
  }

  updateSpecialization(id:number,specialization:any) :Observable<any>{
    return this.http.put(`${this.baseUrl}/${id}`,specialization);
  }

  deleteSpecialization(id:number) :Observable<any>{
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

  getAllSpecialization():Observable<any>{
    return this.http.get(`${this.baseUrl}`);
  }

  getSpecializationById(id:number) :Observable<any>{
    return this.http.get(`${this.baseUrl}/${id}`)
  }
}
