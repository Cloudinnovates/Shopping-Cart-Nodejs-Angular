import { PortadaService } from './../../services/portada/portada.service';
import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/producto.model';
import { CarritoService } from '../../services/carrito/carrito.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  productos: Product[] = [];
  latest: Product[] = [];
  desde = 0;
  constructor(public portadaService: PortadaService, public carritoService: CarritoService) {}

  ngOnInit() {
    this.cargarImgPortada();
    this.cargarLatest();
  }


  cargarImgPortada() {
    this.portadaService.portada()
      .subscribe(data => {
        this.productos = data;
      });
  }

  cargarLatest() {
    this.portadaService.latestProducs(this.desde)
      .subscribe(data => {
        this.latest = data;
      });
  }

  agregarProducto(producto: Product) {
    this.carritoService.agregarAlCarrito(producto)
      .then(() => {
        console.log('Producto agregado a tu carrito de compras');
        swal('Correcto', producto.name + ' agregado a tu carrito de compras correctamente', 'success');
      })
      .catch(() => {
        console.error('Ya cuentas con ese producto en tu carrito de compras');
        swal('Oooops', producto.name + ' ya se encuentra en tu carrito de compras', 'error');
      });
  }

}
