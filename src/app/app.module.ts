import { LoginService } from './services/login/login.service';
import { CarritoService } from './services/carrito/carrito.service';
import { CustomerService } from './services/customer/customer.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

// Componentes
import { HeaderComponent } from './components/shared/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { TopComponent } from './components/top/top.component';
import { ServicesComponent } from './components/services/services.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { LoginComponent } from './components/login/login.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { ProductComponent } from './components/product/product.component';
import { MenuComponent } from './components/shared/menu/menu.component';
import { MenuCategoriasComponent } from './components/menu-categorias/menu-categorias.component';
import { CarritoComponent } from './components/carrito/carrito.component';
import { OrdersComponent } from './components/orders/orders.component';

// Utilities
import { MomentModule } from 'angular2-moment';

// Routing
import {app_routing} from './app.route';

// Services
import { PortadaService } from './services/portada/portada.service';
import { ProductosService } from './services/productos/productos.service';
import { CategoriasService } from './services/categorias/categorias.service';
import { MarcasService } from './services/marcas/marcas.service';
import { PaisesService } from './services/paises/paises.service';
import { LoginGuard } from './services/guards/login.guard';

// Directivas
import { MenuDirective } from './directives/menu.directive';

// Pipes
import { ImagenPipe } from './pipes/imagen.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ProductsComponent,
    TopComponent,
    ServicesComponent,
    AboutComponent,
    ContactComponent,
    LoginComponent,
    FooterComponent,
    ProductComponent,
    ImagenPipe,
    MenuDirective,
    MenuComponent,
    MenuCategoriasComponent,
    CarritoComponent,
    OrdersComponent,
  ],
  imports: [
    BrowserModule,
    app_routing,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MomentModule
  ],
  providers: [PortadaService,
              ProductosService,
              CategoriasService,
              MarcasService,
              CustomerService,
              PaisesService,
              CarritoService,
              LoginService,
              LoginGuard
            ],
  bootstrap: [AppComponent]
})
export class AppModule { }
