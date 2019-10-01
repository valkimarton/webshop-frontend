import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewSingleComponent } from './review-single.component';

describe('ReviewSingleComponent', () => {
  let component: ReviewSingleComponent;
  let fixture: ComponentFixture<ReviewSingleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReviewSingleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
