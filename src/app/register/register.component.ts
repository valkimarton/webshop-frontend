import { Component, OnInit } from '@angular/core';
import { Customer } from '../models/Customer';
import { Address } from '../models/Address';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  customerModel = new Customer();
  submitted = false;
  loading = false;
  returnUrl: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService,
    private customerService: CustomerService
) {
    // redirect to home if already logged in
    if (this.authService.isLoggedIn()) {
      this.router.navigate(['/']);
    }

    this.customerModel.username = 'username';
    this.customerModel.password = 'password';
    this.customerModel.name = 'Full name';
}

  ngOnInit() {
    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  onSubmit() {
    this.submitted = true;
    alert('Submitted');
    this.customerService.registerCustomer(this.customerModel)
      .subscribe(createdCustomer => {
        console.log(JSON.stringify(createdCustomer));
        if (createdCustomer){
          alert('registration successful');
        } else {
          alert('registration unsuccessful');
        }
      });
  }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.customerModel); }

}
