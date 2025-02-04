import { Component, EventEmitter, Output } from '@angular/core';
import { ProductComponent } from './product/product.component';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-modal-crud',
  standalone: true,
  imports: [ProductComponent, MatIconModule],
  templateUrl: './modal-crud.component.html',
  styleUrl: './modal-crud.component.scss'
})
export class ModalCRUDComponent {

  @Output() clicked = new EventEmitter<any>()

  handleCloseModal(){
    this.clicked.emit()
  }

}
