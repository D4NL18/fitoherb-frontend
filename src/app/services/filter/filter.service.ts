import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilterService {

  constructor() { }

  private categorySubject = new BehaviorSubject<string[]>([]);
  private supplierSubject = new BehaviorSubject<string[]>([]);

  category$ = this.categorySubject.asObservable();
  supplier$ = this.supplierSubject.asObservable();


  addCategory(name: string) {
    const updatedCategories = [...this.categorySubject.value, name];
    this.categorySubject.next(updatedCategories);
    
  }

  removeCategory(name: string) {
    const updatedCategories = this.categorySubject.value.filter(category => category !== name);
    this.categorySubject.next(updatedCategories);
  }

  addSupplier(name: string) {
    const updatedSuppliers = [...this.supplierSubject.value, name];
    this.supplierSubject.next(updatedSuppliers);
    console.log(this.supplierSubject.value)
  }

  removeSupplier(name: string) {
    const updatedSuppliers = this.supplierSubject.value.filter(supplier => supplier !== name);
    this.supplierSubject.next(updatedSuppliers);
  }

  getCategories() {
    return this.categorySubject.value;
  }

  getSuppliers() {
    return this.supplierSubject.value;
  }

}
