import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import * as moment from 'moment';
import * as jwt_decode from 'jwt-decode';
import { UserLogin } from './models/UserLogin';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loginUrl = environment.apiBaseUrl + '/authenticate'; // TODO fix

  constructor(private http: HttpClient) {

  }

  login(userLogin: UserLogin) {
    this.http
    .post(this.loginUrl + `?username=${userLogin.username}&password=${userLogin.password}`, userLogin, {observe: 'response'})
    .subscribe(resp => {
      // Here, resp is of type HttpResponse<MyJsonData>.
      // You can inspect its headers:
      this.setSession(resp.headers.get('Authorization'));
    });
  }

  private setSession(authHeader) {
    const decodedToken = this.decodeToken(authHeader);
    console.log(decodedToken);
    const expiresAt = moment().add(decodedToken.exp,'second');

    localStorage.setItem('token_sub', decodedToken.sub);
    localStorage.setItem('token_exp', JSON.stringify(expiresAt.valueOf()) );
    localStorage.setItem('token_roles', decodedToken.rol);

    console.log(localStorage.getItem('token_sub'));
    console.log(localStorage.getItem('token_roles'));
  }

  private decodeToken(authHeader: string): any {
    const token: string = this.removeHeaderPrefix(authHeader);
    return jwt_decode(token);
  }

  private removeHeaderPrefix(authHeader: string): string {
    return authHeader.slice(7);
  }

  logout() {
      localStorage.removeItem('token_sub');
      localStorage.removeItem('token_exp');
      localStorage.removeItem('token_roles');
  }

  public isLoggedIn() {
      return moment().isBefore(this.getExpiration());
  }

  isLoggedOut() {
      return !this.isLoggedIn();
  }

  getExpiration() {
      const expiration = localStorage.getItem("expires_at");
      const expiresAt = JSON.parse(expiration);
      return moment(expiresAt);
  }
}
