import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Product } from './models/product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private productUrl = 'http://localhost:8080/api/v1/product';  // TODO: a base-url-t configuration/environment osztélyba kitenni

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private httpClient: HttpClient
  ) { }

  getProducts(): Observable<Product[]> {
    console.log('getProducts comes');
    return this.httpClient.get<Product[]>(this.productUrl, this.httpOptions);     // TODO: Error handling with catchError ?
    console.log('getProducts finished');
  }

}
