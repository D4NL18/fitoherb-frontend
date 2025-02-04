import { Component, inject, OnInit } from '@angular/core';
import { ButtonComponent } from "../../button/button.component";
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProductsService } from '../../../services/products/products.service';
import { ProductCategoryService } from '../../../services/productCategory/product-category.service';
import { SuppliersService } from '../../../services/suppliers/suppliers.service';
import { Supplier } from '../../../types/Supplier.interface';
import { ProductCategory } from '../../../types/ProductCategory.interface';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [ButtonComponent, ReactiveFormsModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent implements OnInit {

  productsService = inject(ProductsService)
  productCategoryService = inject(ProductCategoryService)
  suppliersService = inject(SuppliersService)

  suppliers: Supplier[] = []
  productsCategory: ProductCategory[] = []
  selectedFile: File | null = null;

  productForm!: FormGroup;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.productForm = this.fb.group({
      productName: ['', Validators.required],
      price_in_cents: [0, Validators.required],
      productDescription: ['', Validators.required],
      productImageUrl: ['', Validators.required],
      supplier: ['', Validators.required],
      productCategory: ['', Validators.required]
    });

    this.suppliersService.getAllSuppliers().subscribe({
      next: (response) => {
        this.suppliers = response
      },
      error: (err) => {
        console.log("Erro ao sincronizar suppliers: ", err)
      }
    })
    this.productCategoryService.getAllCategories().subscribe({
      next: (response) => {
        this.productsCategory = response
      },
      error: (err) => {
        console.log("Erro ao sincronizar suppliers: ", err)
      }
    })
  }



  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.selectedFile = input.files[0];
    }
  }
  
  

  onSubmit() {
    this.addProduct()
  }

  addProduct(): void {
    if (this.productForm.valid) {
      const formValues = this.productForm.value;
      const productName = formValues.productName;
      const price_in_cents = formValues.price_in_cents;
      const productDescription = formValues.productDescription;
      const productImageUrl = this.selectedFile!;
      const supplier = formValues.supplier;
      const productCategory = formValues.productCategory;

      console.log(formValues)

      this.productsService.addProduct(
        productName, 
        price_in_cents, 
        productDescription, 
        productImageUrl, 
        supplier, 
        productCategory
      )
        .subscribe({
        next: (response) => {
          console.log('Supplier added successfully:', response);
        },
        error: (err) => {
          console.error('Error adding supplier:', err);
        }
      });
    } else {
      console.error('Form is invalid');
    }
  }
}
