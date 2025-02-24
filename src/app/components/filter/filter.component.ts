import { Component, inject, OnInit } from '@angular/core';
import { ItemComponent } from './item/item.component';
import { ButtonApplyComponent } from "./button-apply/button-apply.component";
import { ProductCategoryService } from '../../services/productCategory/product-category.service';
import { ProductCategory } from '../../types/ProductCategory.interface';

@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [ItemComponent, ButtonApplyComponent],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss'
})
export class FilterComponent {

}
