import { Component, OnInit, Input } from '@angular/core';
import { Review } from '../models/Review';

@Component({
  selector: 'app-review-single',
  templateUrl: './review-single.component.html',
  styleUrls: ['./review-single.component.css']
})
export class ReviewSingleComponent implements OnInit {

  @Input() review: Review;

  constructor() { }

  ngOnInit() {
  }

}
