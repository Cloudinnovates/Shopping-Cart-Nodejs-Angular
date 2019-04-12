import { LoginService } from './../../../services/login/login.service';
import { Component, OnInit, Input } from '@angular/core';
import { CarritoService } from '../../../services/carrito/carrito.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() total = '';
  constructor(public carritoService: CarritoService, public router: Router, public _loginService: LoginService) {
    console.log(this.carritoService.carrito);
  }


  ngOnInit() {
  }

  opcion() {
    if (!this._loginService.estaLogueado()) {
      this.router.navigate(['/login']);
    } else {
      this._loginService.logout();
    }

  }

}
