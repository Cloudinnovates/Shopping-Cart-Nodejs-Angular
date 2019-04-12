import { CategoriasService } from './../../services/categorias/categorias.service';
import { Category } from './../../models/categoria.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-categorias',
  templateUrl: './menu-categorias.component.html',
  styleUrls: ['./menu-categorias.component.css']
})
export class MenuCategoriasComponent implements OnInit {
  categories: Category[] = [];
  constructor(public _categoriesService: CategoriasService) { }

  ngOnInit() {
    this.cargarMenu();
  }

  cargarMenu() {
    this._categoriesService.categorias()
      .subscribe(data => {
        this.categories = data;
      });
  }


}
