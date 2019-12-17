import { CustomerService } from './../customer.service';
import { Component, OnInit, Input } from '@angular/core';
import { Review } from '../models/Review';
import { Customer } from '../models/Customer';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-review-single',
  templateUrl: './review-single.component.html',
  styleUrls: ['./review-single.component.css']
})
export class ReviewSingleComponent implements OnInit {

  @Input() review: Review;

  customer: Customer;

  constructor(
    private customerService: CustomerService,
    private authService: AuthService
  ) {
   }

  ngOnInit() {
  }

  editReview() {
    alert('Not implemented');
  }

}
