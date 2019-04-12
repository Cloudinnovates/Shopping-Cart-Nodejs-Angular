import { Injectable } from '@angular/core';
import { BASE_URL } from './../../config/app.config';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
@Injectable()
export class MarcasService {

  constructor(public http: HttpClient) { }

  marcas() {
    const url = BASE_URL + '/brands/combo/all';
    return this.http.get(url)
      .map((resp: any) => {
        return resp.brands;
      });
  }

}
