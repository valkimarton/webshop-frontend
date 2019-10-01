import { environment } from './../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Product } from './models/Product';
import { Observable } from 'rxjs';
import { Review } from './models/Review';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private productUrl = environment.apiBaseUrl + '/product';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private httpClient: HttpClient
  ) { }

  getProducts(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.productUrl, this.httpOptions);     // TODO: Error handling with catchError ?
  }

  getProductById(id: number): Observable<Product> {
    const url = `${this.productUrl}/${id}`;
    return this.httpClient.get<Product>(url, this.httpOptions);               // TODO: Error handling
  }

  getReviewsByProductId(id: number): Observable<Review[]> {
    const url = `${this.productUrl}/${id}/reviews`;
    return this.httpClient.get<Review[]>(url, this.httpOptions);
  }

}
