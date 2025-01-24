import { Component, EventEmitter, inject, Output } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import { SearchProductsService } from '../../services/searchProducts/search-products.service';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-searchbar',
  standalone: true,
  imports: [MatIconModule, ReactiveFormsModule],
  templateUrl: './searchbar.component.html',
  styleUrl: './searchbar.component.scss'
})
export class SearchbarComponent {

  searchProductsService = inject(SearchProductsService)

  input = new FormControl<string>('')

  constructor() {
    this.input.valueChanges.subscribe(value => this.searchProductsService.setSearchText = value!)
  }
}
