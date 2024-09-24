import { ProductFormComponent } from './product-form/product-form.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsTableComponent } from './products-table/products-table.component';

const routes: Routes = [
   {path: '',  redirectTo : '/products', pathMatch: 'full' },
   {path: 'products',     component: ProductsTableComponent},
   {path: 'product/:id',  component: ProductFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
