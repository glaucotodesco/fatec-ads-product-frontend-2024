import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }

  getProducts(): Observable<Product []>{
    return this.http.get<Product []>('http://localhost:3000/products');
  }

  getProductById(id:number): Observable<Product>{
    return this.http.get<Product>('http://localhost:3000/products/' + id);
  }

  delete(product:Product): Observable<void>{
    return this.http.delete<void>('http://localhost:3000/products/' + product.id);
  }

  update(product: Product):Observable<Product>{
    return this.http.put<Product>(
          'http://localhost:3000/products/' + product.id,
           product);
  }






}
