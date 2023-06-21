import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './pages/products/products.component';
import { DetailComponent } from './pages/products/detail/detail.component';
import { GestionComponent } from './pages/gestion/gestion.component';

const routes: Routes = [
  {path: '', component: HomeComponent },
  {path: 'products', component: ProductsComponent},
  {path: 'products/:id', component: DetailComponent},
  {path: 'gestion', component: GestionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
