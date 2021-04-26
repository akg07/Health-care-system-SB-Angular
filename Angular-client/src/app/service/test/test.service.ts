import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(private http:HttpClient) { }

  private baseUrl ='http://localhost:8080/hms/api/test';
 
  addTest(test:any) :Observable<any>{
    return this.http.post(`${this.baseUrl}`,test);
  }

  updateTest(id:number,test:any) :Observable<any>{
    return this.http.put(`${this.baseUrl}/${id}`,test);
  }

  deleteTest(id:number) :Observable<any>{
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

getAllTest():Observable<any>{
    return this.http.get(`${this.baseUrl}`);
  }

  getTestById(id:number) :Observable<any>{
    return this.http.get(`${this.baseUrl}/${id}`)
  }
}

