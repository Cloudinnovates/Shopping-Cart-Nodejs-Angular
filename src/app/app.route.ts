import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {ProductsComponent} from './components/products/products.component';
import {TopComponent} from './components/top/top.component';
import {ServicesComponent} from './components/services/services.component';
import {AboutComponent} from './components/about/about.component';
import {ContactComponent} from './components/contact/contact.component';
import {LoginComponent} from './components/login/login.component';
import {ProductComponent} from './components/product/product.component';
import { CarritoComponent } from './components/carrito/carrito.component';
import { OrdersComponent } from './components/orders/orders.component';
import { LoginGuard } from './services/guards/login.guard';

const app_routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'top', component: TopComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'login', component: LoginComponent },
  { path: 'product/:product', component: ProductComponent },
  { path: 'carrito', component: CarritoComponent },
  { path: 'orders', component: OrdersComponent, canActivate: [LoginGuard] },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const app_routing = RouterModule.forRoot(app_routes, {useHash: true});
