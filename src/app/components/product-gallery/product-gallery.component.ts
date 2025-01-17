import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { ProductItemComponent } from './product-item/product-item.component';
import { CommonModule } from '@angular/common';
import { PagelistComponent } from '../pagelist/pagelist.component';
import { Product } from '../../types/Product.interface';
import ProductsList from "../../products"
import { ProductsService } from '../../services/products/products.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product-gallery',
  standalone: true,
  imports: [ProductItemComponent, PagelistComponent],
  templateUrl: './product-gallery.component.html',
  styleUrl: './product-gallery.component.scss'
})
export class ProductGalleryComponent implements OnInit, OnChanges {

  constructor(private productsService: ProductsService) {}
  
  products: Product[] = [];
  updatedProducts: Product[] = []
  itemsPerPage = 12;
  paginatedProducts: Product[] = [];
  @Input() filterText: string = ""

  ngOnInit() {
    this.loadProducts()
  }

  ngOnChanges(): void {
    console.log(this.filterText)
      if(this.filterText.length >=2) {
        this.loadFilterByNameProducts(this.filterText)
      }else {
        this.updatedProducts = this.products
        this.updatePaginatedProducts()
      }
  }

  loadProducts(): void {
    this.productsService.getAllProducts().subscribe({
      next: (response) => {
        this.products = response;
        this.updatedProducts = this.products;
        this.updatePaginatedProducts();
      },
      error: (err) => {
        console.log("Erro ao receber produtos", err);
      }
    });
  }

  loadFilterByNameProducts(text: string) {
    const lowerCaseText = text.toLowerCase();
  
    // Filtro por nome do produto
    const productNameMatches = this.products.filter(product =>
      product.productName.toLowerCase().includes(lowerCaseText)
    );
  
    // Filtro por nome da categoria
    const categoryNameMatches = this.products.filter(product =>
      product.productCategory?.name.toLowerCase().includes(lowerCaseText)
    );
  
    // Filtro por nome do fornecedor
    const supplierNameMatches = this.products.filter(product =>
      product.supplier?.supplierName.toLowerCase().includes(lowerCaseText)
    );
  
    // Combina os resultados sem duplicatas
    this.updatedProducts = Array.from(new Set([
      ...productNameMatches,
      ...categoryNameMatches,
      ...supplierNameMatches
    ]));
  
    this.updatePaginatedProducts();
  }

  updatePaginatedProducts(page: number = 1) {
    const startIndex = (page - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    this.paginatedProducts = this.updatedProducts.slice(startIndex, endIndex);
  }

  totalPages() {
    return Math.ceil(this.updatedProducts.length / this.itemsPerPage);
  }

  pags() {
    return Array.from({ length: this.totalPages() }, (_, i) => i + 1);
  }

  onPageChange(page: number) {
    this.updatePaginatedProducts(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}