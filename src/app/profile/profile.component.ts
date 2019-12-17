import { InvoiceService } from './../invoice.service';
import { CustomerService } from './../customer.service';
import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { Customer } from '../models/Customer';
import { Invoice } from '../models/Invoice';
import { ProductInCart } from '../models/ProductInCart';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  customer: Customer;
  invoices: { [id: number]: ProductInCart[]; } = {};
  invoicesShown = false;

  constructor(
    private authService: AuthService,
    private customerService: CustomerService,
    private invoiceService: InvoiceService
  ) {
    const customerId: number = parseInt(authService.getUserId());
    customerService.getCustomerMyself().subscribe( res => {
      this.customer = res;
      console.log('Customer: ')
      console.log(this.customer);
    });
   }

  async ngOnInit() {
    const customerId: number = parseInt(this.authService.getUserId());
    await this.customerService.getCustomerMyself().subscribe( res => {
      this.customer = res;
      console.log('Customer:');
      console.log(this.customer);
    });
    await this.invoiceService.getMyInvoices().subscribe((invoiceResults) => {
      invoiceResults.forEach(invoice => {
        this.invoiceService.getProductInCartsByInvoiceId(invoice.id).subscribe((productResults) => {
          this.invoices[invoice.id] = productResults;
          console.log('products in an invoice:');
          console.log(this.invoices[invoice.id]);
        });
      });
    });

  }

  toggleInvoices() {
    if (this.invoicesShown == false) {
      this.invoicesShown = true;
      document.getElementById('toggle_invoices_button').innerHTML = 'Hide invoices';
    } else {
      this.invoicesShown = false;
      document.getElementById('toggle_invoices_button').innerHTML = 'Show invoices';
    }
  }

  print(s) {
    console.log(s);
  }



}
