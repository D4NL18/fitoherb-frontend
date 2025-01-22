import { Component, EventEmitter, inject, Output } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import { SearchProductsService } from '../../services/searchProducts/search-products.service';

@Component({
  selector: 'app-searchbar',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './searchbar.component.html',
  styleUrl: './searchbar.component.scss'
})
export class SearchbarComponent {

  searchProductsService = inject(SearchProductsService)

  handleTextChange(event: Event) {
    const input = event.target as HTMLInputElement;

    if(event.target) {
      this.searchProductsService.setSearchText = input.value
    }
  }
}
