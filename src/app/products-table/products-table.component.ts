import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products-table',
  templateUrl: './products-table.component.html',
  styleUrl: './products-table.component.css'
})
export class ProductsTableComponent implements OnInit {

  products : Product[] = [];

  constructor(private service: ProductService,
              private router: Router
  ){}

  ngOnInit() {
     this.loadProducts();
  }

  loadProducts() {
      this.service.getProducts().subscribe({
          next: data => this.products = data
        }
      );
  }

  delete(product: Product){
    this.service.delete(product).subscribe({
        next: () => this.loadProducts()
    })
  }

  create(){
    this.router.navigate(['product'])
  }

}
