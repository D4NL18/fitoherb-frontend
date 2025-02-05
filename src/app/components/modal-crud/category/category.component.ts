import { Component, EventEmitter, inject, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProductCategoryService } from '../../../services/productCategory/product-category.service';
import { ButtonComponent } from "../../button/button.component";
import { ProductCategory } from '../../../types/ProductCategory.interface';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [ReactiveFormsModule, ButtonComponent],
  templateUrl: './category.component.html',
  styleUrl: './category.component.scss'
})
export class CategoryComponent implements OnInit, OnDestroy {

  fb = inject(FormBuilder)
  categoryService = inject(ProductCategoryService)

  categoryForm!: FormGroup

  @Output() sentForm = new EventEmitter<void>()
  @Input() idEditing: string = ""

  category: ProductCategory = {idCategory: "", name: ""}

  ngOnInit(): void {
    this.categoryForm = this.fb.group({
      categoryName: ['', Validators.required],
    })

    if(this.idEditing != "") {
      this.categoryService.getCategoryById(this.idEditing).subscribe({
        next: (response) => {
          this.category = response
          this.categoryForm.patchValue({
            categoryName: this.category.name,
          });
        },
        error: (err) => {
          console.log("Erro ao resgatar categoria", err)
        }
      })
    }
  }

  ngOnDestroy(): void {
    this.category = {idCategory: "", name: ""}
  }

  onSubmit() {

    if(this.categoryForm.valid && this.idEditing == "") {
      const formValues = this.categoryForm.value
      const categoryName = formValues.categoryName

      this.categoryService.addCategory(categoryName).subscribe({
        next: (response) => {
          console.log("Categoria adicionada com sucesso: ", response)
          this.sentForm.emit()
        },
        error: (err) => {
          console.log("Erro ao adicionar categoria: ", err)
        }
      })
    }
    else if(this.categoryForm.valid && this.idEditing != "") {
      const formValues = this.categoryForm.value
      const categoryName = formValues.categoryName

      this.categoryService.editCategory(this.idEditing, categoryName).subscribe({
        next: (response) => {
          console.log("Categoria editada com sucesso: ", response)
          this.sentForm.emit()
        },
        error: (err) => {
          console.log("Erro ao editar categoria: ", err)
        }
      })
    }
    else {
      console.log("form invalid")
    }
  }

}
