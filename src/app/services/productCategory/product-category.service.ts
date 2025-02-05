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

  getCategoryById(id: string): Observable<ProductCategory> {
    return this.http.get<ProductCategory>(`${this.apiUrl}/${id}`)
  }

  addCategory(categoryName: string): Observable<ProductCategory[]> {
    const categoryData = { name: categoryName };
    return this.http.post<ProductCategory[]>(this.apiUrl, categoryData, {
      headers: { 'Content-Type': 'application/json' }
    });
  }

  deleteCategory(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`, { responseType: 'text' });
  }

  editCategory(id: string, categoryName: string): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, { name: categoryName }, {
      headers: { 'Content-Type': 'application/json' }
    });
  }
    
}
