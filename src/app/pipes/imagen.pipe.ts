import { Pipe, PipeTransform } from '@angular/core';
import { BASE_URL } from '../config/app.config';

@Pipe({
  name: 'imagen'
})
export class ImagenPipe implements PipeTransform {

  transform(imagen: string, tipo: string = 'posts'): any {
    let url = BASE_URL + '/products/';
    if (tipo === 'posts') {
      url += 'posts/' + imagen;
    }

    if (tipo === 'detail') {
      url += 'detail/' + imagen;
    }
    return url;
  }

}
