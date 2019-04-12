import { Injectable } from '@angular/core';
import { BASE_URL } from './../../config/app.config';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
@Injectable()
export class CategoriasService {

  constructor(public http: HttpClient) { }

  categorias() {
    const url = BASE_URL + '/categories/combo/all';
    return this.http.get(url)
      .map((resp: any) => {
        return resp.categories;
      });
  }

  productos(tipo: string, id: string, desde: number) {
    const url = `${BASE_URL}/${tipo}/${id}/products?desde=${desde}`;
    return this.http.get(url)
      .map((resp: any) => {
        return resp.productos;
      });
  }

}
