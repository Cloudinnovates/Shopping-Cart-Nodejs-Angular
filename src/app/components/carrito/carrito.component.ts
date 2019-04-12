import { Carrito } from './../../models/carrito.model';
import { CarritoService } from './../../services/carrito/carrito.service';
import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login/login.service';
import swal from 'sweetalert2';
import { Router } from '@angular/router';


@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {

  constructor(public carritoService: CarritoService,
              public _loginService: LoginService,
              public router: Router) { }

  ngOnInit() {
  }

  carrito() {
    if (!this._loginService.estaLogueado()) {
      swal('Importante!', 'Necesitas estar logueado para poder comprar en nuestra tienda', 'warning');
       this.router.navigate(['/login']);
    } else {
      swal({
        title: '¿Está seguro de realizar la compra?',
        text: 'Una vez aceptado no podrás cancelarla',
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, realizar compra!'
      }).then((result) => {
        if (result.value) {
          this.carritoService.enviarCarrito()
            .subscribe(data => {
              console.log(data);
              this.carritoService.eliminarCarrito();
              swal(
                'Correcto!',
                'Compra realizada con éxito, un operario se pondrá en contacto contigo para la entrega de los productos',
                'success'
              );
            });
        }
      });
    }
  }

}
