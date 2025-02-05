import { Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { ButtonComponent } from "../../button/button.component";
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProductsService } from '../../../services/products/products.service';
import { ProductCategoryService } from '../../../services/productCategory/product-category.service';
import { SuppliersService } from '../../../services/suppliers/suppliers.service';
import { Supplier } from '../../../types/Supplier.interface';
import { ProductCategory } from '../../../types/ProductCategory.interface';
import { Product } from '../../../types/Product.interface';

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
  product: Product = {
    idProduct: "",
    productName: "",
    productDescription: "",
    productImageUrl: "",
    price_in_cents: -1,
    productCategory: {idCategory: "", name: ""},
    supplier: {supplierId: "", supplierName: "", imagePath: "", master: false}
  }
  @Input() idEditing: string = ""

  @Output() sentForm = new EventEmitter<void>()

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

    if(this.idEditing != "") {
      this.productsService.getProductById(this.idEditing).subscribe({
        next: (response) => {
          this.product = response
          this.productForm.patchValue({
            productName: this.product.productName,
            price_in_cents: this.product.price_in_cents,
            productDescription: this.product.productDescription,
            supplier: this.product.supplier.supplierName,
            productCategory: this.product.productCategory.name
          });
        },
        error: (err) => {
          console.log("Erro ao resgatar produto", err)
        }
      })
      this.productForm = this.fb.group({
        productName: ['', Validators.required],
        price_in_cents: [0, Validators.required],
        productDescription: ['', Validators.required],
        productImageUrl: [''],
        supplier: ['', Validators.required],
        productCategory: ['', Validators.required]
      })
    }
  }



  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.selectedFile = input.files[0];
    }
  }
  
  

  onSubmit() {
    if(this.idEditing == "") {
      this.addProduct()
    }
    else if(this.idEditing != "") {
      this.editProduct()
    }
  }

  editProduct() {
    if (this.productForm.valid) {
      const formValues = this.productForm.value;
      const productName = formValues.productName;
      const price_in_cents = formValues.price_in_cents;
      const productDescription = formValues.productDescription;
      const productImageUrl = this.selectedFile!;
      const supplier = formValues.supplier;
      const productCategory = formValues.productCategory;

      this.productsService.editProduct(
        this.idEditing, 
        productName, 
        price_in_cents, 
        productDescription, 
        productImageUrl, 
        supplier, 
        productCategory
      ).subscribe({
        next: (response) => {
          console.log('Produto editado com sucesso:', response);
          this.sentForm.emit()
        },
        error: (err) => {
          console.log("Erro ao editar produto: ", err)
        }
      })
    }
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
          console.log('Product added successfully:', response);
          this.sentForm.emit()
        },
        error: (err) => {
          console.error('Error adding Product:', err);
        }
      });
    } else {
      console.error('Form is invalid');
    }
  }
}
