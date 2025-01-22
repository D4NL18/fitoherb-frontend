import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchProductsService {

  constructor() { }

  private searchText: string = "";
  public textUpdated$ = new Subject<string>

  set setSearchText(newText: string) {
    this.searchText = newText;
    this.textUpdated$.next(this.searchText)
  }

  getSearchText() {
    return this.searchText;
  }
}
