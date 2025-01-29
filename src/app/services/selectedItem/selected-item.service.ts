import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SelectedItemService {

  constructor() { }

  private selectedItem: string = "products"
  public textUpdated$ = new Subject<string>

  set setSelectedItem(newItem: string) {
    this.selectedItem = newItem
    this.textUpdated$.next(this.selectedItem)
  }

  get getSelectedItem() {
    return this.selectedItem
  }
}
