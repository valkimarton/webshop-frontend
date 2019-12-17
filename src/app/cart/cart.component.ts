import { ProductInCart } from './../models/ProductInCart';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';
import { ProductInCartService } from '../product-in-cart.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  productInCarts: ProductInCart[];

  constructor(
    private route: ActivatedRoute,        // The ActivatedRoute holds information about the route
    private productService: ProductService,
    private productInCartService: ProductInCartService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getProductInCarts();
  }

  getProductInCarts(): void {
    const id = +this.route.snapshot.paramMap.get('id');       //  (+) operator converts  string to a number
    this.productInCartService.getProductInCarts(id).subscribe(productInCarts => {          // USER ID!
      this.productInCarts = productInCarts;
    });
  }

  getItemTotalPrice(productInCart: ProductInCart): number {
    return productInCart.numberOfProducts * productInCart.purchasePrice;
  }

  getTotalPrice(): number {
    let price = 0;
    this.productInCarts.forEach(productInCart => {
      price += this.getItemTotalPrice(productInCart);
    });
    return price;
  }

  removeProductInCart(productInCartId: number): void {
    console.log('Remove porductInCart with id: ' + productInCartId);
    this.productInCartService.removeProductInCart(productInCartId).subscribe(()=> {
      this.getProductInCarts();
    });
  }

  buyProducts(): void {
    this.productInCartService.buyProducts().subscribe((products) => {
      this.getProductInCarts();
      console.log(products);
    });
  }

}
