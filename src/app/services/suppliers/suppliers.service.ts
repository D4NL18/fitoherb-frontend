import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Supplier } from '../../types/Supplier.interface';

@Injectable({
  providedIn: 'root'
})
export class SuppliersService {

  private apiUrl = 'http://localhost:8080/supplier';

  constructor(private http: HttpClient) { }

  getAllSuppliers(): Observable<Supplier[]> {
    return this.http.get<Supplier[]>(`${this.apiUrl}`)
  }

  addSupplier(supplierName: string, image: File, isMaster: boolean): Observable<Supplier[]> {
    const formData = new FormData();
    formData.append('supplierName', supplierName);
    formData.append('image', image);
    formData.append('isMaster', String(isMaster));
  
    return this.http.post<Supplier[]>(`${this.apiUrl}`, formData);
  }
  
}
