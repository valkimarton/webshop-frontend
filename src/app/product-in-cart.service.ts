import { environment } from './../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ProductInCart } from './models/ProductInCart';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class ProductInCartService {

  private productInCartUrl = environment.apiBaseUrl + '/product_in_cart';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient,
    private authService: AuthService
  ) {
    this.httpOptions = {
      headers: new HttpHeaders({ 
        'Content-Type': 'application/json',
        Authorization: authService.getJwtTokenWithPrefix()
      })
    };
  }

  addProductInCartToCart(productInCart: ProductInCart): Observable<ProductInCart> {
    const url = this.productInCartUrl;
    return this.http.post<ProductInCart>(url, productInCart, this.httpOptions);  // TODO: Error handling with catchError ?
  }

  getProductInCarts(userId: number): Observable<ProductInCart[]> {
    const url = `${this.productInCartUrl}/${userId}`;
    return this.http.get<ProductInCart[]>(url, this.httpOptions);
  }

  buyProducts() {
    const url = `${this.productInCartUrl}/buy`;
    return this.http.post<ProductInCart[]>(url, null, this.httpOptions);
  }

  removeProductInCart(productInCartId: number) {
    const url = `${this.productInCartUrl}/${productInCartId}`;
    return this.http.delete<void>(url, this.httpOptions);
  }
}
