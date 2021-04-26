import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BillService {

  constructor(private http: HttpClient) { }

  private baseUrl='http://localhost:8080/hms/api/bill';

  addBill(bill: any): Observable<any>{
    return this.http.post(`${this.baseUrl}`, bill);
  }

  updateBill(id: number, bill: any): Observable<any>{
    return this.http.put(`${this.baseUrl}/${id}`, bill);
  }

  deleteBill(id: number): Observable<any>{
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

  getAllBill(): Observable<any>{
    return this.http.get(`${this.baseUrl}`);
  }

  getBillById(id:number): Observable<any>{
    return this.http.get(`${this.baseUrl}/${id}`);
  }
}
