import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login-block',
  templateUrl: './login-block.component.html',
  styleUrls: ['./login-block.component.css']
})
export class LoginBlockComponent implements OnInit {

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit() {
    console.log(this.authService.isLoggedIn());
    console.log(this.authService.getExpiration());
  }

}
