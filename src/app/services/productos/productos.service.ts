import { Injectable } from '@angular/core';
import { BASE_URL } from './../../config/app.config';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Router } from '@angular/router';
@Injectable()
export class ProductosService {

  constructor(public http: HttpClient, public router: Router) { }

  producto(slug: string) {
    const url = BASE_URL + '/products/' + slug;
    return this.http.get(url)
      .map((resp: any) => {
        return resp.producto;
      })
      .catch(err => {
        console.log(err);
        this.router.navigate(['home']);
        return Observable.throw(err);
      });
  }

  productos(desde: number) {
    const url = BASE_URL + '/products?desde=' + desde;
    return this.http.get(url)
      .map((resp: any) => {
        return resp.products;
      });
  }

}
