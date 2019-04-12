import { CustomerService } from './../../services/customer/customer.service';
import { Component, OnInit } from '@angular/core';
import { Carrito } from '../../models/carrito.model';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  orders: Carrito[] = [];
  constructor(public _customerService: CustomerService) { }

  ngOnInit() {
    this.getOrders();
  }

  getOrders() {
    this._customerService.getOrders()
      .subscribe(data => {
        this.orders = data;
      });
  }

}
