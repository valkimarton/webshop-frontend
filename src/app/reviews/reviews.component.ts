import { ProductService } from './../product.service';
import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../models/Product';
import { Review } from '../models/Review';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {

  @Input() product: Product;
  reviews: Review[];

  constructor(
    private productService: ProductService
  ) { }

  ngOnInit() {
    this.productService.getReviewsByProductId(this.product.id)
      .subscribe(fetchedReviews => this.reviews = fetchedReviews);
  }

}
