import { environment } from './../environments/environment';
import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Invoice } from './models/Invoice';
import { Observable } from 'rxjs';
import { ProductInCart } from './models/ProductInCart';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {

  private invoiceUrl = environment.apiBaseUrl + '/invoice';

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

  getMyInvoices(): Observable<Invoice[]> {
    const url = `${this.invoiceUrl}/customer`;
    return this.httpClient.get<Invoice[]>(url, this.httpOptions);               // TODO: Error handling
  }

  getProductInCartsByInvoiceId(invoiceId: number): Observable<ProductInCart[]> {
    const url = `${this.invoiceUrl}/${invoiceId}/products`;
    return this.httpClient.get<ProductInCart[]>(url, this.httpOptions);               // TODO: Error handling
  }


}
