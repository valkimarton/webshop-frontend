import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { PRODUCTS } from '../mock_products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[];

  constructor(
    private productService: ProductService
    ) { }

  ngOnInit() {
    this.getProducts();
  }

  getProducts(): void {
    this.productService.getProducts()
      .subscribe(fetchedProducts => this.products = fetchedProducts);
  }

}
