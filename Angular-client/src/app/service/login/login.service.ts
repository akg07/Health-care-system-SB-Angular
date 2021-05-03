import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const AUTH_API = 'http://localhost:8080/hms/auth/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  isLogin: boolean;

  constructor(private http: HttpClient) {}

  login(credentials): Observable<any> {
    return this.http.post(AUTH_API + 'signin', {
      username: credentials.username,
      password: credentials.password
    }, httpOptions);
  }

  register(user): Observable<any> {
    return this.http.post(AUTH_API + 'signup', {
      username: user.username,
      email: user.email,
      password: user.password
    }, httpOptions);
  }

  // public login(username: string, password:string){
  //   console.log(username + " : " + password)
  //   const headers = new HttpHeaders({Authorization: 'Basic '+ btoa(username+":"+password)});
  //   this.isLogin = true;
  //   return this.http.get("http://localhost:8080/hms/", {headers, responseType: 'text' as 'json'});
  // }

  // public logout(){
  //   this.isLogin = false;
  // }

  // public getIsLogin(){
  //   return this.isLogin;
  // }
}
