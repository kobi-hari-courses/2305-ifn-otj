import { Component } from '@angular/core';
import { Customer } from './models/customer.model';
import { Observable, of } from 'rxjs';
import { CustomersService } from './services/customers.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  customers$ = of<Customer[]>([]);
  constructor(private service: CustomersService) {

  }

  onGetCustomersClicked() {
    this.customers$ = this.service.getAllCustomers();
  }
}
