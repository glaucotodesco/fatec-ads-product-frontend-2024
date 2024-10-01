import { ProductFormComponent } from './product-form/product-form.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsTableComponent } from './products-table/products-table.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
   {path: '',  redirectTo : '/home', pathMatch: 'full' },
   {path: 'products',     component: ProductsTableComponent},
   {path: 'product/:id',  component: ProductFormComponent },
   {path: 'product',      component: ProductFormComponent },
   {path: 'home',         component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
