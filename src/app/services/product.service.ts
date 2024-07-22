import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable, switchMap, tap } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = 'http://localhost:3000/products';

  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl);
  }

  
  getProductById(id: number): Observable<Product> {
    return this.http.get<Product>(`${this.apiUrl}/${id}`);
  }

  getProductsByUserId(userId: number): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.apiUrl}?userId=${userId}`);
  }
  

  addProduct(formValue: { title: string, description: string, price: number, imageUrl: string, userId: number }): Observable<Product> {
    return this.getProducts().pipe(
      map(products => {
        const maxId = products.length > 0 ? Math.max(...products.map(p => p.id)) : 0;
        const newProduct: Product = { ...formValue, id: maxId + 1 };
        return newProduct;
      }),
      
      switchMap(newProduct => this.http.post<Product>(this.apiUrl, newProduct))
    );
  }

  updateProduct(product: Product): Observable<Product> {
    return this.http.put<Product>(`${this.apiUrl}/${product.id}`, product);
  }

  removeProduct(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`).pipe(
      tap(result => console.log(`Product ${id} supprimé - ${result}`))
    );
    
  }
    
}
