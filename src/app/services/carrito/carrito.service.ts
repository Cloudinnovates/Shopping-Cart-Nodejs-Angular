import { Product } from './../../models/producto.model';
import { Injectable } from '@angular/core';
import { BASE_URL } from './../../config/app.config';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Carrito } from '../../models/carrito.model';
import { LoginService } from '../login/login.service';

@Injectable()
export class CarritoService {

  carrito: Product[] = [];

  constructor(public http: HttpClient, public loginService: LoginService) {
    this.cargarData();
   }

  actualizarCarrito() {
    localStorage.setItem('carrito', JSON.stringify(this.carrito));
  }

  cargarData() {
    if ( localStorage.getItem('carrito')) {
      this.carrito = JSON.parse(localStorage.getItem('carrito'));
    }
  }

  agregarAlCarrito(producto: Product) {
    return new Promise((resolve, reject) => {
      for (const item of this.carrito) {
        if (item._id === producto._id) {
          reject(false);
          return;
        }
      }
      this.carrito.push(producto);
      this.actualizarCarrito();
      resolve(true);
    });
  }

  quitarProducto(producto: Product) {
    const i = this.carrito.indexOf(producto);
    if (i !== -1) {
      this.carrito.splice(i, 1);
      this.actualizarCarrito();
    }
  }

  enviarCarrito() {
    let url = BASE_URL + '/carrito';
    url += '?token=' + this.loginService.token;

    let total = 0;

    for (const item of this.carrito) {
        total = total + Number(item.final_price);
    }
    const carrito = new Carrito(this.loginService.id, this.carrito, total);
    return this.http.post(url, carrito);
  }

  eliminarCarrito() {
    localStorage.removeItem('carrito');
    this.carrito = [];
  }

}
