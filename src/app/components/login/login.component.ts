import { Router } from '@angular/router';

import { PaisesService } from './../../services/paises/paises.service';
import { Country } from './../../models/country.model';
import { CustomerService } from './../../services/customer/customer.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { Customer } from '../../models/customer.model';
import swal from 'sweetalert2';
import { LoginService } from '../../services/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  forma: FormGroup;

  paises: Country[] = [];

  mostrarAlerta = false;
  alertaMensaje = '';
  tipoAlerta;

  constructor(public customerService: CustomerService,
              public countryService: PaisesService,
              public loginService: LoginService,
              public router: Router) { }

  ngOnInit() {
    this.comboPaises();
    this.forma = new FormGroup({
      name: new FormControl(null, Validators.required),
      lastname: new FormControl(null, Validators.required),
      dni: new FormControl(null, Validators.required),
      country_id: new FormControl(null, Validators.required),
      email: new FormControl(null, [
        Validators.required,
        Validators.email
      ]),
      city: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required),
      telefono: new FormControl(null, Validators.required),
    });

    this.forma.setValue({
      name: '',
      lastname: '',
      dni: '',
      country_id: '',
      email: '',
      city: '',
      password: '',
      telefono: ''
    });

  }

  comboPaises() {
    this.countryService.paises()
      .subscribe(data => {
        this.paises = data;
      });
  }

  registrarCustomer() {

    if (this.forma.invalid) {
      this.alertaMensaje = 'Complete el formulario de registro.';
      this.tipoAlerta = false;
      this.mostrarAlerta = true;
      setTimeout(() => {
        this.mostrarAlerta = false;
        this.alertaMensaje = '';
      }, 5000);
      return;
    }

    const customer = new Customer(
      this.forma.value.name,
      this.forma.value.lastname,
      this.forma.value.dni,
      this.forma.value.country_id,
      this.forma.value.email,
      this.forma.value.city,
      this.forma.value.password,
      this.forma.value.telefono,
    );
    console.log(customer);

    this.customerService.agregar(customer)
      .subscribe(data => {
          this.alertaMensaje = 'Bienvenido ' + data.name + ' a Smart Store ahora puedes iniciar sesión para comprar lo que desees';
          this.tipoAlerta = true;
          this.mostrarAlerta = true;
          this.forma.setValue({
            name: '',
            lastname: '',
            dni: '',
            country_id: '',
            email: '',
            city: '',
            password: '',
            telefono: ''
          });
      });
  }

  login(forma: NgForm) {
    if (forma.invalid) {
      swal('Importante!', 'Ingrese bien sus datos para iniciar sesión', 'warning');
      return;
    }

    const customer = new Customer(null, null, null, null,
                                  forma.value.email,
                                  null,
                                  forma.value.password,
                                  null);
    this.loginService.login(customer)
      .subscribe(hecho => {
        swal('Bienvenido', 'Ahora puedes aprovechar nuestrar ofertas', 'success');
        this.router.navigate(['/carrito']);
      });
  }

}
