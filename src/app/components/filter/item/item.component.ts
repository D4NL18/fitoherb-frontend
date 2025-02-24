import { Component, inject, Input } from '@angular/core';
import { CheckboxComponent } from '../checkbox/checkbox.component';
import { MatIconModule } from '@angular/material/icon';
import { ProductCategory } from '../../../types/ProductCategory.interface';
import { ProductCategoryService } from '../../../services/productCategory/product-category.service';
import { SuppliersService } from '../../../services/suppliers/suppliers.service';
import { Supplier } from '../../../types/Supplier.interface';

@Component({
  selector: 'app-item',
  standalone: true,
  imports: [CheckboxComponent, MatIconModule],
  templateUrl: './item.component.html',
  styleUrl: './item.component.scss'
})
export class ItemComponent {

  categories: ProductCategory[] = []
  suppliers: Supplier[] = []

  categoriesService = inject(ProductCategoryService)
  suppliersService = inject(SuppliersService)

  @Input() info = ""
  @Input() title = ""
  isClicked: boolean = false

  ngOnInit(): void {
    if(this.info == "categories") {
      this.categoriesService.getAllCategories().subscribe({
        next: (response) => {
          this.categories = response
        },
        error: (err) => {
          console.log("Erro ao receber categorias: ", err)
        }
      })
    }
    else if(this.info == "suppliers") {
      this.suppliersService.getAllSuppliers().subscribe({
        next: (response) => {
          this.suppliers = response
        },
        error: (err) => {
          console.log("Erro ao receber suppliers: ", err)
        }
      })
    }
    
  }

  handleClick() {
    this.isClicked = !this.isClicked
  }
}
