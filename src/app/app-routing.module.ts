import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsTableComponent } from './products-table/products-table.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
   {path: '',    redirectTo: '/products',  pathMatch: 'full' },
   {path: 'products',    component: ProductsTableComponent},
   {path: 'product/:id', component: ProductComponent}




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
