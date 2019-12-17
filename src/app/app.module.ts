import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ReviewSingleComponent } from './review-single/review-single.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { LoginComponent } from './login/login.component';
import { LoginBlockComponent } from './login-block/login-block.component';
import { RegisterComponent } from './register/register.component';
import { CartComponent } from './cart/cart.component';
import { Location } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductDetailsComponent,
    ReviewSingleComponent,
    ReviewsComponent,
    LoginComponent,
    LoginBlockComponent,
    RegisterComponent,
    CartComponent,
    ProfileComponent,
    AdminHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule
  ],
  providers: [Location],
  bootstrap: [AppComponent]
})
export class AppModule { }
