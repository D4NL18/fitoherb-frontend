import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Supplier } from '../../types/Supplier.interface';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SuppliersService {

  private apiUrl = `${environment.apiUrl}/supplier`;

  constructor(private http: HttpClient) { }

  getAllSuppliers(): Observable<Supplier[]> {
    return this.http.get<Supplier[]>(`${this.apiUrl}`)
  }

  getSupplierById(id: string): Observable<Supplier> {
    return this.http.get<Supplier>(`${this.apiUrl}/id=${id}`)
  }

  addSupplier(supplierName: string, image: File, isMaster: boolean): Observable<Supplier[]> {
    const formData = new FormData();
    formData.append('supplierName', supplierName);
    formData.append('image', image);
    formData.append('isMaster', String(isMaster));
  
    return this.http.post<Supplier[]>(`${this.apiUrl}`, formData);
  }

  deleteSupplier(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`, { responseType: 'text' });
  }

  editSupplier(id: string, supplierName: string, image: File, isMaster: boolean): Observable<any> {

    const formData = new FormData();
    formData.append('supplierName', supplierName);
    formData.append('image', image);
    formData.append('isMaster', String(isMaster));

    return this.http.put(`${this.apiUrl}/${id}`, formData);
  }
  
}
