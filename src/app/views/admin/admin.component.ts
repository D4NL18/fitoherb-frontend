import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { SuppliersService } from '../../services/suppliers/suppliers.service';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SelectDataComponent } from "../../components/select-data/select-data.component";
import { TableComponent } from "../../components/table/table.component";
import { SelectItem } from '../../types/SelectItem.interface';
import { ProductsService } from '../../services/products/products.service';
import { Product } from '../../types/Product.interface';
import { Supplier } from '../../types/Supplier.interface';
import { ProductCategory } from '../../types/ProductCategory.interface';
import { ProductCategoryService } from '../../services/productCategory/product-category.service';
import { ExitButtonComponent } from "../../components/exit-button/exit-button.component";
import { ButtonComponent } from "../../components/button/button.component";
import { SelectedItemService } from '../../services/selectedItem/selected-item.service';
import { Subscription } from 'rxjs';
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { ModalCRUDComponent } from "../../components/modal-crud/modal-crud.component";

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, SelectDataComponent, TableComponent, ButtonComponent, NavbarComponent, ModalCRUDComponent],
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit, OnDestroy {

  supplierService = inject(SuppliersService)
  productsService = inject(ProductsService)
  categoryService = inject(ProductCategoryService)
  selectedItemService = inject(SelectedItemService)

  updatedItem$ = this.selectedItemService.textUpdated$;

  updatedTextSubscription = new Subscription()

  selectItems: SelectItem[] = [
    {value: "products", text: "Produtos"},
    {value: "users", text: "Usuários"},
    {value: "categories", text: "Categorias de Produto"},
    {value: "suppliers", text: "Fornecedores"}
  ]

  productColumns = [
    { key: 'productName', label: 'Nome do Produto' },
    { key: 'price_in_cents', label: 'Preço (centavos)' },
    { key: 'productDescription', label: 'Descrição' },
    { key: 'supplierName', label: 'Fornecedor' },
    { key: 'categoryName', label: 'Categoria' },
    { key: 'edit', label: 'Editar' },
    { key: 'delete', label: 'Excluir' },
  ];

  supplierColumns = [
    { key: 'supplierName', label: 'Nome do Fornecedor' },
    { key: 'master', label: 'Fornecedor Master' },
    { key: 'edit', label: 'Editar' },
    { key: 'delete', label: 'Excluir' },
  ];

  categoryColumns = [
    {key: 'name', label: 'Nome'},
    { key: 'edit', label: 'Editar' },
    { key: 'delete', label: 'Excluir' },
  ]

  products: Product[] = []
  suppliers: Supplier[] = []
  categories: ProductCategory[] = []
  selectedItem: string = "products"
  isModalOpen: boolean = false
  
  constructor() {
    const sub = this.updatedItem$.subscribe((text) => {
      this.selectedItem = text
    })
    this.updatedTextSubscription.add(sub)
  }

  ngOnInit(): void {
    this.loadProducts()
    this.loadSupplier()
    this.loadCategories()
  }

  ngOnDestroy(): void {
    this.updatedTextSubscription.unsubscribe()
  }

  loadProducts(): void {
    this.productsService.getAllProducts().subscribe({
      next: (response) => {
        this.products = response;
        this.products = this.products.map(product => ({
          ...product,
          supplierName: product.supplier?.supplierName || 'Sem fornecedor',
          categoryName: product.productCategory?.name || 'Sem Categoria',
          edit: 'edit',
          delete: 'delete'
        }));
      },
      error: (err) => {
        console.log("Erro ao receber produtos", err);
      }
    });
  }

  loadSupplier(): void {
    this.supplierService.getAllSuppliers().subscribe({
      next: (response) => {
        this.suppliers = response;
        this.suppliers = this.suppliers.map(supplier => ({
          ...supplier,
          edit: 'edit',
          delete: 'delete'
        }));
      },
      error: (err) => {
        console.log("Erro ao receber produtos", err);
      }
    });
  }

  loadCategories(): void {
    this.categoryService.getAllCategories().subscribe({
      next: (response) => {
        this.categories = response;
        this.categories = this.categories.map(category => ({
          ...category,
          edit: 'edit',
          delete: 'delete'
        }));
      },
      error: (err) => {
        console.log("Erro ao receber produtos", err);
      }
    });
  }

  handleClick() {
    this.isModalOpen = !this.isModalOpen
  }

  handleModalClose() {
    this.isModalOpen = false
  }

}
