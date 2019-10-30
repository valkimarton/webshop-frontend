
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from '../models/Customer';
import { UserLogin } from '../models/UserLogin';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userModel = new UserLogin('username', 'password');
  submitted = false;
  loading = false;
  returnUrl: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService
) {
    // redirect to home if already logged in
    /*
    if (this.authenticationService.currentUserValue) { 
        this.router.navigate(['/']);
    }
    */
}

  ngOnInit() {
    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/'; //TODO: this.router.navigate(['login'], { queryParams: { returnUrl: state.url }}); ahonnan átnavigálok a loginhoz.
  }

  onReset(): void { this.userModel = new UserLogin('newUserName', 'newPW'); }

  onSubmit() {
    this.submitted = true;
    alert('Submitted');
    this.authService.login(this.userModel);
  }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.userModel); }

}

