import { environment } from './../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import * as moment from 'moment';
import * as jwt_decode from 'jwt-decode';
import { UserLogin } from './models/UserLogin';
import { Customer } from './models/Customer';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loginUrl = environment.apiBaseUrl + '/authenticate';
  private customerUrl = environment.apiBaseUrl + '/customer';

  constructor(private http: HttpClient) {

  }

  login(userLogin: UserLogin) {
    const body = new URLSearchParams();
    body.set('username', userLogin.username);
    body.set('password', userLogin.password);

    this.http
      .post(this.loginUrl,
        body.toString(),
        {
          headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded'), 
          observe: 'response'
        }
      )
      .subscribe(resp => {
        // Here, resp is of type HttpResponse<MyJsonData>.
        // You can inspect its headers:
        this.setSession(resp.headers.get('Authorization'));
    });
  }

  private setSession(authHeader) {
    const decodedToken = this.decodeToken(authHeader);
    console.log(decodedToken);
    const expiresAt = moment(decodedToken.exp * 1000);  // gets TimeStamp in Seconds, needed in millis.
    console.log( expiresAt.toDate());

    localStorage.setItem('token_sub', decodedToken.sub);
    localStorage.setItem('token_exp', JSON.stringify(expiresAt.valueOf()) );
    localStorage.setItem('token_roles', decodedToken.rol);
    localStorage.setItem('token_id', decodedToken.id);

    console.log(localStorage.getItem('token_sub'));
    console.log(localStorage.getItem('token_roles'));
    console.log(moment(localStorage.getItem('token_exp')));
    console.log('Logged in: ' + this.isLoggedIn());
  }

  private decodeToken(authHeader: string): any {
    const token: string = this.removeHeaderPrefix(authHeader);
    this.saveTokenToStorage(token);
    return jwt_decode(token);
  }

  private removeHeaderPrefix(authHeader: string): string {
    return authHeader.slice(7);
  }

  private saveTokenToStorage(token: string): void {
    localStorage.setItem('token', token);

  }

  logout() {
      localStorage.removeItem('token_sub');
      localStorage.removeItem('token_id');
      localStorage.removeItem('token_exp');
      localStorage.removeItem('token_roles');
      localStorage.removeItem('token');
  }

  public isLoggedIn() {
      return moment().isBefore(this.getExpiration());
  }

  public isLoggedOut() {
      return !this.isLoggedIn();
  }

  getExpiration() {
      const expiration = localStorage.getItem('token_exp');
      const expiresAt = JSON.parse(expiration);
      return moment(expiresAt);
  }

  public getRoles() {
    return localStorage.getItem('token_roles');
  }

  public isAdmin() {
    if(this.getRoles() === undefined || this.getRoles() == null || this.getRoles().length == 0) {
      return false;
    }
    return this.getRoles().includes('ADMIN');
  }

  public getUserName(): string {
    return localStorage.getItem('token_sub');
  }

  public getUserId(): string {
    return localStorage.getItem('token_id');
  }

  public getJwtToken(): string {
    return localStorage.getItem('token');
  }

  public getJwtTokenWithPrefix(): string {
    return 'Bearer ' + localStorage.getItem('token');
  }
}
