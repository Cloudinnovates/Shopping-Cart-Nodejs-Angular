import { Category } from './../../models/categoria.model';
import { CategoriasService } from './../../services/categorias/categorias.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  categories: Category[] = [];
  titulo = 'Categorías';
  tipo = 'categories';
  constructor(public _categoriaService: CategoriasService) { }

  ngOnInit() {
    this.cargarMenu();
  }

  cargarMenu() {
    this._categoriaService.categorias()
      .subscribe(data => {
        this.categories = data;
      });
  }

}
