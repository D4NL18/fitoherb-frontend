import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../../types/Product.interface';
import { Supplier } from '../../types/Supplier.interface';
import { ProductCategory } from '../../types/ProductCategory.interface';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private apiUrl = `${environment.apiUrl}/products`;

  constructor(private http: HttpClient) { }

  getAllProducts(): Observable<Product[]> {
    console.log(this.apiUrl)
    return this.http.get<Product[]>(`${this.apiUrl}`)
  }

  getProductById(id: string): Observable<Product> {
    return this.http.get<Product>(`${this.apiUrl}/id=${id}`)
  }

  addProduct(productName: string, price_in_cents: number, productDescription: string, productImage: File, supplier: string, productCategory: string): Observable<Product[]> {

    const formData = new FormData();
    formData.append('productName', productName);
    formData.append('price_in_cents', price_in_cents.toString());
    formData.append('productDescription', productDescription);
    formData.append('productImageUrl', productImage);
    formData.append('supplier', supplier);
    formData.append('productCategory', productCategory);
    
    return this.http.post<Product[]>(`${this.apiUrl}`, formData);
  }

  deleteProduct(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`, { responseType: 'text' });
  }

  editProduct(id: string, productName: string, price_in_cents: number, productDescription: string, productImage: File, supplier: string, productCategory: string): Observable<any> {
    const formData = new FormData();
    formData.append('productName', productName);
    formData.append('price_in_cents', price_in_cents.toString());
    formData.append('productDescription', productDescription);
    formData.append('productImageUrl', productImage);
    formData.append('supplier', supplier);
    formData.append('productCategory', productCategory);

    return this.http.put(`${this.apiUrl}/${id}`, formData);
  }
}
