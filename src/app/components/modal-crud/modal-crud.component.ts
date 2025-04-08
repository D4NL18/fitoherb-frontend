import { Component, EventEmitter, inject, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { ProductComponent } from './product/product.component';
import { MatIconModule } from '@angular/material/icon';
import { UserComponent } from "./user/user.component";
import { CategoryComponent } from "./category/category.component";
import { SupplierComponent } from "./supplier/supplier.component";

@Component({
  selector: 'app-modal-crud',
  standalone: true,
  imports: [ProductComponent, MatIconModule, UserComponent, CategoryComponent, SupplierComponent],
  templateUrl: './modal-crud.component.html',
  styleUrl: './modal-crud.component.scss'
})
export class ModalCRUDComponent {

  @Output() clicked = new EventEmitter<any>()
  @Output() sentForm = new EventEmitter<any>()
  @Output() error = new EventEmitter<any>()
  @Input() selectedItem: string = "products"
  @Input() idEditing: string = ""

  handleCloseModal(){
    this.clicked.emit()
  }
  handleSentForm(){
    this.sentForm.emit()
  }
  handleError(){
    this.error.emit()
  }

}
