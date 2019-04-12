import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { BASE_URL } from './../../config/app.config';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Customer } from './../../models/customer.model';
import swal from 'sweetalert2';

@Injectable()
export class LoginService {
  customer: Customer;
  token: string;
  id: string;

  constructor(public http: HttpClient) {
    this.cargarStorage();
  }

  estaLogueado() {
    return this.token.length > 4 ? true : false;
  }

  cargarStorage() {
    if (localStorage.getItem('token')) {
      this.token = localStorage.getItem('token');
      this.id = localStorage.getItem('id');
      this.customer = JSON.parse(localStorage.getItem('customer'));
    } else {
      this.token = '';
      this.id = '';
      this.customer = null;
    }
  }

  public login(customer: Customer) {
    const url = BASE_URL + '/auth';
    return this.http.post(url, customer)
      .map((resp: any) => {
        this.guardarStorage(resp.id, resp.token, resp.customer);
        return true;
      })
      .catch(err => {
        console.log(err);
        swal(err.error.errors.message, err.error.mensaje, 'error');
        return Observable.throw(err);
      });
  }


  guardarStorage(id: string, token: string, customer: Customer) {
    localStorage.setItem('id', id);
    localStorage.setItem('token', token);
    localStorage.setItem('customer', JSON.stringify(customer));
    this.customer = customer;
    this.token = token;
    this.id = id;
  }

  logout() {
    this.customer = null;
    this.token = '';
    this.id = '';
    localStorage.removeItem('id');
    localStorage.removeItem('token');
    localStorage.removeItem('customer');
  }

}
