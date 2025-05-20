import { Component, OnInit, inject, OnDestroy, OnChanges, SimpleChanges } from '@angular/core';
import { ProductItemComponent } from './product-item/product-item.component';
import { Product } from '../../types/Product.interface';
import { ProductsService } from '../../services/products/products.service';
import { SearchProductsService } from '../../services/searchProducts/search-products.service';
import { Subscription } from 'rxjs';
import { FilterService } from '../../services/filter/filter.service';
@Component({
  selector: 'app-product-gallery',
  standalone: true,
  imports: [ProductItemComponent],
  templateUrl: './product-gallery.component.html',
  styleUrl: './product-gallery.component.scss'
})
export class ProductGalleryComponent implements OnInit, OnDestroy {

  searchProductsService = inject(SearchProductsService)
  productsService = inject(ProductsService)
  filterService = inject(FilterService)

  updatedText$ = this.searchProductsService.textUpdated$;

  products: Product[] = [];
  updatedProducts: Product[] = []
  paginatedProducts: Product[] = [];
  filterText: string = ""
  itemsPerPage: number = 12
  loadMoreButton: boolean = true

  categories: Array<string> = []
  suppliers: Array<string> = []

  updatedTextSubscription = new Subscription()

  constructor() {
    const sub = this.updatedText$.subscribe((text) => {
      this.filterText = text
      if(this.filterText != "") {
        this.loadFilterByNameProducts(this.filterText)
      }else {
        this.loadProducts()
      }
    })
    this.updatedTextSubscription.add(sub)

    const categorySub = this.filterService.category$.subscribe(() => {
      this.applyFilters();
    });
    this.updatedTextSubscription.add(categorySub);
  
    const supplierSub = this.filterService.supplier$.subscribe(() => {
      this.applyFilters();
    });
    this.updatedTextSubscription.add(supplierSub);
  }

  ngOnInit() {
    this.loadProducts()
  }

  ngOnDestroy(): void {
    this.updatedTextSubscription.unsubscribe()
  }

  loadProducts(): void {
    this.productsService.getAllProducts().subscribe({
      next: (response) => {
        this.products = response;
        this.updatedProducts = this.products;
        this.applyFilters()
        this.updatePaginatedProducts();
      },
      error: (err) => {
        console.log("Erro ao receber produtos", err);
      }
    });
  }

  applyFilters() {
    this.categories = this.filterService.getCategories();
    this.suppliers = this.filterService.getSuppliers();
    
    if(this.filterText == "") {
      this.updatedProducts = this.products.filter(product => 
        (this.categories.length === 0 || this.categories.includes(product.productCategory.name.toLowerCase())) &&
        (this.suppliers.length === 0 || this.suppliers.includes(product.supplier.supplierName.toLowerCase()))
      );
    }else {
      this.loadFilterByNameProducts(this.filterText)
      this.updatedProducts = this.updatedProducts.filter(product => 
        (this.categories.length === 0 || this.categories.includes(product.productCategory.name.toLowerCase())) &&
        (this.suppliers.length === 0 || this.suppliers.includes(product.supplier.supplierName.toLowerCase()))
      );
    }

  
    this.updatePaginatedProducts();
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

  updatePaginatedProducts() {
    this.paginatedProducts = this.updatedProducts.slice(0, this.itemsPerPage);
    this.updateButtonVisible()

  }

  updateButtonVisible() {
    if (this.paginatedProducts.length && this.updatedProducts.length && this.paginatedProducts.length >= this.updatedProducts.length) {
      this.loadMoreButton = false
    }else {
      this.loadMoreButton = true
    }
  }

  onLoadMore() {
    this.itemsPerPage += 12
    this.updatePaginatedProducts();
  }
}