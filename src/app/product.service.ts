import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  url='http://34.202.23.8/products';

  constructor(private http:HttpClient) { }

  getProducts(): Observable<Product []>{
    return this.http.get<Product []>(this.url);
  }

  getProductById(id:number): Observable<Product>{
    return this.http.get<Product>( `${this.url}/${id}`);
  }

  delete(product:Product): Observable<void>{
    return this.http.delete<void>(`${this.url}/${product.id}`);
  }

  update(product: Product):Observable<Product>{
    return this.http.put<Product>(`${this.url}/${product.id}`,product);
  }

  save(product: Product):Observable<Product>{
    return this.http.post<Product>(this.url, product);
  }





}
