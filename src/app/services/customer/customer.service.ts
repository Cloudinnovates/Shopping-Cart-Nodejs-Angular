import { Injectable } from '@angular/core';
import { BASE_URL } from './../../config/app.config';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Customer } from './../../models/customer.model';
import swal from 'sweetalert2';
import { LoginService } from '../login/login.service';

@Injectable()
export class CustomerService {

  constructor(public http: HttpClient, public _loginService: LoginService) { }

  agregar(customer: Customer) {
    const url = BASE_URL + '/customers';
    return this.http.post(url, customer)
      .map((resp: any) => {
        return resp.customer;
      })
      .catch(err => {
        console.log(err);
        swal(err.error.errors.message, err.error.mensaje, 'error');
        return Observable.throw(err);
      });
  }

  getOrders() {
    const url = `${BASE_URL}/customers/${this._loginService.id}/orders?token=${this._loginService.token}`;
    return this.http.get(url)
      .map((resp: any) => {
        return resp.orders;
      })
      .catch(err => {
        console.log(err);
        swal(err.error.errors.message, err.error.mensaje, 'error');
        return Observable.throw(err);
      });
  }

}
