import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'VMSneakers';
  userId = 0;

  constructor(
    private authService: AuthService,
    private location: Location
  ) {
    this.getUserId();
  }

  getUserId() {
    if (this.authService.getUserId() != null) {
      this.userId = parseInt(this.authService.getUserId());
    }
    console.log('User ID: ' + this.userId);
  }
}
