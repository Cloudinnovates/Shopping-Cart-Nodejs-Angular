import { Component, OnInit } from '@angular/core';
import { MarcasService } from '../../services/marcas/marcas.service';
import { Brand } from '../../models/brand.model';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.css']
})
export class TopComponent implements OnInit {
  marcas: Brand[] = [];
  titulo = 'Marcas';
  constructor(public marcasService: MarcasService) { }

  ngOnInit() {
    this.cargarMenu();
  }

  cargarMenu() {
    this.marcasService.marcas()
      .subscribe(data => {
        this.marcas = data;
      });
  }

}
