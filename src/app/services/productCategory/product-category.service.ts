import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductCategory } from '../../types/ProductCategory.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductCategoryService {

  private apiUrl = 'http://localhost:8080/category';

  constructor(private http: HttpClient) { }

  getAllCategories(): Observable<ProductCategory[]> {
    return this.http.get<ProductCategory[]>(`${this.apiUrl}`)
  }

  addCategory(categoryName: string): Observable<ProductCategory[]> {
    const categoryData = { name: categoryName };
    return this.http.post<ProductCategory[]>(this.apiUrl, categoryData, {
      headers: { 'Content-Type': 'application/json' }
    });
  }
    
}
