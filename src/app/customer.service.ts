import { AuthService } from './auth.service';
import { environment } from './../environments/environment';
import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customer } from './models/Customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private customerUrl = environment.apiBaseUrl + '/customer';
  private registrationUrl = environment.apiBaseUrl + '/registration';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private httpClient: HttpClient,
    private authService: AuthService
  ) {
    this.httpOptions = {
      headers: new HttpHeaders({ 
        'Content-Type': 'application/json',
        Authorization: authService.getJwtTokenWithPrefix()
      })
    };
  }

  getCustomers(): Observable<Customer[]> {
    return this.httpClient.get<Customer[]>(this.customerUrl, this.httpOptions);     // TODO: Error handling with catchError ?
  }

  getCustomerById(id: number): Observable<Customer> {
    const url = `${this.customerUrl}/${id}`;
    return this.httpClient.get<Customer>(url, this.httpOptions);               // TODO: Error handling
  }

  getCustomerMyself(): Observable<Customer> {
    const url = `${this.customerUrl}/myself`;
    return this.httpClient.get<Customer>(url, this.httpOptions);               // TODO: Error handling
  }

  createCustomer(customer: Customer): Observable<Customer> {
    const url = this.customerUrl;
    return this.httpClient.post<Customer>(url, customer, this.httpOptions);
  }

  registerCustomer(customer: Customer): Observable<Customer> {
    const url = this.registrationUrl;
    return this.httpClient.post<Customer>(url, customer, this.httpOptions);
  }
}
