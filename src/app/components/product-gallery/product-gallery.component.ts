import { Component, OnInit } from '@angular/core';
import { ProductItemComponent } from './product-item/product-item.component';
import { CommonModule } from '@angular/common';
import { PagelistComponent } from '../pagelist/pagelist.component';
import { Product } from '../../types/Product.interface';
import ProductsList from "../../products"

@Component({
  selector: 'app-product-gallery',
  standalone: true,
  imports: [ProductItemComponent, PagelistComponent],
  templateUrl: './product-gallery.component.html',
  styleUrl: './product-gallery.component.scss'
})
export class ProductGalleryComponent implements OnInit {
  
  products = ProductsList();
  itemsPerPage = 12;
  paginatedProducts: Product[] = [];

  ngOnInit() {
    this.updatePaginatedProducts();
  }

  updatePaginatedProducts(page: number = 1) {
    const startIndex = (page - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    this.paginatedProducts = this.products.slice(startIndex, endIndex);
  }

  totalPages() {
    return Math.ceil(this.products.length / this.itemsPerPage);
  }

  pags() {
    return Array.from({ length: this.totalPages() }, (_, i) => i + 1);
  }

  onPageChange(page: number) {
    this.updatePaginatedProducts(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}