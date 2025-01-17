import { Component } from '@angular/core';
import { FooterComponent } from "../../components/footer/footer.component";
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { SearchbarComponent } from "../../components/searchbar/searchbar.component";
import { FilterComponent } from "../../components/filter/filter.component";
import { ProductGalleryComponent } from "../../components/product-gallery/product-gallery.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [FooterComponent, NavbarComponent, SearchbarComponent, FilterComponent, ProductGalleryComponent, CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {

  filterText: string = ""

  handleFilterText(text: string) {
    this.filterText = text;
  }

}
