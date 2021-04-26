import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InsuranceService {

  constructor(private http: HttpClient) { }

  private baseUrl='http://localhost:8080/hms/api/insurance';

  addInsurance(insurance: any): Observable<any>{
    return this.http.post(`${this.baseUrl}`, insurance);

  }

  updateInsurance(id: number, insurance: any): Observable<any>{
    return this.http.put(`${this.baseUrl}/${id}`, insurance);

  }

  deleteInsurance(id: number): Observable<any>{
    return this.http.delete(`${this.baseUrl}/${id}`);

  }

  getAllInsurance(): Observable<any>{
    return this.http.get(`${this.baseUrl}`);
  }

  getInsuranceById(id:number): Observable<any>
  {
    return this.http.get(`${this.baseUrl}/${id}`);
  }
}
