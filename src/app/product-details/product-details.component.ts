import { ProductInCartService } from './../product-in-cart.service';
import { ProductInCart } from './../models/ProductInCart';
import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Product } from '../models/Product';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product: Product;

  quantityToBuy = 1;

  constructor(
    private route: ActivatedRoute,        // The ActivatedRoute holds information about the route
    private productService: ProductService,
    private productInCartService: ProductInCartService,
    private location: Location,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.getProduct();
  }

  getProduct(): void {
    const id = +this.route.snapshot.paramMap.get('id');       //  (+) operator converts  string to a number
    this.productService.getProductById(id).subscribe(product => this.product = product);
  }

  goBack(): void {
    this.location.back();
  }

  addProductToCart(): void {
    const productInCart = new ProductInCart(
      this.product.id,
      this.quantityToBuy,
      this.product.price,
      null,
      null
    );

    this.productInCartService.addProductInCartToCart(productInCart).subscribe(productInCart => {
      console.log(productInCart);
    });

    alert('Product added to cart');
  }

  editProduct() {
    alert('Not implemented');
  }

}
