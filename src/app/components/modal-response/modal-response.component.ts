import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';


@Component({
  selector: 'app-modal-response',
  standalone: true,
  imports: [MatIconModule, CommonModule],
  templateUrl: './modal-response.component.html',
  styleUrl: './modal-response.component.scss'
})
export class ModalResponseComponent implements OnInit {

  @Output() closeModal = new EventEmitter<void>();
  @Input() type: string = "error"
  
  icon: string = ""
  title: string = ""
  color: string = ""

  ngOnInit(): void {
    if(this.type == "success") {
      this.icon = "check_circle"
      this.title = "Ação executada com sucesso!"
      this.color = "green"
    }else {
      this.icon = "error"
      this.title = "Um erro inesperado aconteceu!"
      this.color = "red"
    }
  }

  handleCloseModal() {
    this.closeModal.emit()
  }
}
