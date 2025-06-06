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
import { User } from '../../types/user.interface';
import { UserService } from '../../services/user/user.service';
import { LogoutComponent } from "./components/logout/logout.component";
import { ModalConfirmComponent } from "../../components/modal-confirm/modal-confirm.component";
import { Router } from '@angular/router';
import { ModalResponseComponent } from '../../components/modal-response/modal-response.component';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, SelectDataComponent, TableComponent, ButtonComponent, NavbarComponent, ModalCRUDComponent, LogoutComponent, ModalConfirmComponent, ModalResponseComponent],
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit, OnDestroy {

  supplierService = inject(SuppliersService)
  productsService = inject(ProductsService)
  categoryService = inject(ProductCategoryService)
  usersService = inject(UserService)
  selectedItemService = inject(SelectedItemService)
  private router = inject(Router)

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
    { key: 'price', label: 'Preço' },
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
  userColumns = [
    { key: 'user_name', label: 'Nome do Usuário' },
    { key: 'email', label: 'E-mail' },
    { key: 'edit', label: 'Editar' },
    { key: 'delete', label: 'Excluir' },
  ];

  products: Product[] = []
  users: User[] = []
  suppliers: Supplier[] = []
  categories: ProductCategory[] = []
  selectedItem: string = "products"
  isModalOpen: boolean = false
  idEditing: string = ""
  isModalLogoutOpen: boolean = false
  isModalDeleteOpen: boolean = false
  isModalResponseOpen: boolean = false
  modalDeleteType: string = ""
  modalResponseType: "error" | "success" = "error"
  idDeleting: number = 0
  
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
    this.loadUsers()
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
          price: this.formatPrice(product.price_in_cents),
          edit: 'edit',
          delete: 'delete'
        }));
      },
      error: (err) => {
        console.log("Erro ao receber produtos", err);
      }
    });
  }

  loadUsers(): void {
    this.usersService.getAllUsers().subscribe({
      next: (response) => {
        this.users = response;
        this.users = this.users.map(user => ({
          ...user,
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
    this.idEditing = ""
  }

  handleModalClose() {
    this.isModalOpen = false
    this.idEditing = ""
  }

  handleCreated() {
    this.handleModalClose();
    this.modalResponseType = "success"
    this.isModalResponseOpen = true
    this.loadProducts()
    this.loadSupplier()
    this.loadCategories()
    this.loadUsers()
  }

  handleError() {
    console.log("entrou 3")
    this.modalResponseType = "error"
    this.isModalResponseOpen = true
  }

  handleModalResponseClose() {
    this.isModalResponseOpen = false
    this.modalResponseType = "error"
  }



  handleDeleteCategory(i: number) {
    const category = this.categories[i]

    this.categoryService.deleteCategory(category.idCategory).subscribe({
      next: (response) => {
        console.log(response)
        this.loadCategories()
      },
      error: (err) => {
        console.log("Erro ao deletar categoria: ", err)
        this.modalResponseType = "error"
        this.isModalResponseOpen = true
      }
    })
    
  }
  handleDeleteSupplier(i: number) {
    const supplier = this.suppliers[i]

    this.supplierService.deleteSupplier(supplier.supplierId).subscribe({
      next: (response) => {
        this.loadSupplier()
      },
      error: (err) => {
        console.log("Erro ao deletar fornecedor: ", err)
        this.modalResponseType = "error"
        this.isModalResponseOpen = true
      }
    })
    
  }
  handleDeleteProduct(i: number) {
    const product = this.products[i]

    this.productsService.deleteProduct(product.idProduct).subscribe({
      next: (response) => {
        console.log(response)
        this.loadProducts()
      },
      error: (err) => {
        console.log("Erro ao deletar categoria: ", err)
        this.modalResponseType = "error"
        this.isModalResponseOpen = true
      }
    })
    
  }

  openModalDelete(type: string, i: number) {
    this.isModalDeleteOpen = !this.isModalDeleteOpen
    this.modalDeleteType = type
    this.idDeleting = i
  }

  closeModalDelete() {
    this.isModalDeleteOpen = !this.isModalDeleteOpen
  }

  handleDelete() {
    console.log(this.modalDeleteType)
    if(this.modalDeleteType === "categories") {
      this.handleDeleteCategory(this.idDeleting)
    }
    else if(this.modalDeleteType === "suppliers") {
      this.handleDeleteSupplier(this.idDeleting)
    }
    else if(this.modalDeleteType === "products") {
      this.handleDeleteProduct(this.idDeleting)
    }
    else if(this.modalDeleteType === "users") {
      this.handleDeleteUser(this.idDeleting)
    }
    this.closeModalDelete()
  }

  handleDeleteUser(i: number) {
    const user = this.users[i]

    this.usersService.deleteUser(user.user_id).subscribe({
      next: (response) => {
        console.log(response)
        this.loadUsers()
      },
      error: (err) => {
        console.log("Erro ao deletar user: ", err)
        this.modalResponseType = "error"
        this.isModalResponseOpen = true
      }
    })
    
  }

  handleEditProduct(i: number) {
    this.isModalOpen = true
    this.idEditing = this.products[i].idProduct
  }

  handleEditSupplier(i: number) {
    this.isModalOpen = true
    this.idEditing = this.suppliers[i].supplierId
  }

  handleEditCategory(i: number) {
    this.isModalOpen = true
    this.idEditing = this.categories[i].idCategory
  }

  handleEditUser(i: number) {
    this.isModalOpen = true
    this.idEditing = this.users[i].user_id
  }

  handleLogoutModal() {
    this.isModalLogoutOpen = !this.isModalLogoutOpen
  }

  handleLogout() {
    this.usersService.logout()
    this.router.navigate(['/admin'])
  }

  formatPrice(price: number) {
    price = price/100
    return price
  }

}
