import { ProductosService } from './../../../services/productos/productos.service';
import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../../models/producto.model';
import { CategoriasService } from '../../../services/categorias/categorias.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  @Input() menu: any[] = [];
  @Input() titulo = '';
  @Input() tipo;
  desde = 0;

  productos: Product[] = [];

  constructor(public _categorieService: CategoriasService,
              public _productService: ProductosService) { }

  ngOnInit() {
    this.misProductos();
  }

  traerProductos(id: string) {
    this._categorieService.productos(this.tipo, id, this.desde)
      .subscribe(data => {
        this.productos = data;
      });
  }

  misProductos() {
    this._productService.productos(this.desde)
      .subscribe(data => {
        this.productos = data;
      });
  }

}
