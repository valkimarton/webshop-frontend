import { ProductInCart } from './models/ProductInCart';
import { environment } from './../environments/environment';
import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { AuthService } from './auth.service';
import { Product } from './models/Product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cartUrl;

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    authService: AuthService,
    private http: HttpClient
  ) {
    this.cartUrl = environment.apiBaseUrl + '/customer/' + authService.getUserId() + '/cart/product_in_cart';
  }

  addProductInCartToCart(productInCart: ProductInCart): void {
    alert("under implementation");
    /* productInCart = new ProductInCart(
      
    )
    this.http.post<ProductInCart>(this.cartUrl, )*/
  }

}
