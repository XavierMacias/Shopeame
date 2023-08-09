import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './pages/products/products.component';
import { DetailComponent } from './pages/products/detail/detail.component';
import { GestionComponent } from './pages/gestion/gestion.component';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { GuardService } from './shared/guards/guard.service';

const routes: Routes = [
  {path: '', component: HomeComponent },
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'products', component: ProductsComponent, canActivate: [GuardService]},
  {path: 'products/:id', component: DetailComponent, canActivate: [GuardService]},
  {path: 'gestion', component: GestionComponent, canActivate: [GuardService]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
