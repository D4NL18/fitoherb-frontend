import { Component, EventEmitter, inject, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProductCategoryService } from '../../../services/productCategory/product-category.service';
import { ButtonComponent } from "../../button/button.component";

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [ReactiveFormsModule, ButtonComponent],
  templateUrl: './category.component.html',
  styleUrl: './category.component.scss'
})
export class CategoryComponent implements OnInit {

  fb = inject(FormBuilder)
  categoryService = inject(ProductCategoryService)

  categoryForm!: FormGroup

  @Output() sentForm = new EventEmitter<void>()

  ngOnInit(): void {
    this.categoryForm = this.fb.group({
      categoryName: ['', Validators.required],
    })
  }

  onSubmit() {

    if(this.categoryForm.valid) {
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
    else {
      console.log("form invalid")
    }
  }

}
