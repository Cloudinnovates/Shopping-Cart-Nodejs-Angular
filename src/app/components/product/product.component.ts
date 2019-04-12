import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../services/productos/productos.service';
import { CategoriasService } from '../../services/categorias/categorias.service';
import { Category } from '../../models/categoria.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  slug = '';
  producto: any = {};
  categorias: Category[] = [];

  constructor(private activatedRoute: ActivatedRoute,
              public _productoService: ProductosService,
              public _categoriasService: CategoriasService) {
      this.activatedRoute.params
        .subscribe(params => {
          this.slug = params['product'];
          this.obtenerProducto(this.slug);
        });
   }

  ngOnInit() {
    this.listaCategorias();
  }

  obtenerProducto(slug: string) {
    this._productoService.producto(slug)
      .subscribe(data => {
        this.producto = data;
      });
  }

  listaCategorias() {
    this._categoriasService.categorias()
      .subscribe(data => {
        this.categorias = data;
        console.log(this.categorias);
      });
  }

}
