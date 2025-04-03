import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import { Router } from '@angular/router';
import { UserService } from '../../services/user/user.service';


@Component({
  selector: 'app-modal-confirm',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './modal-confirm.component.html',
  styleUrl: './modal-confirm.component.scss'
})
export class ModalConfirmComponent {



  @Output() closeModal = new EventEmitter<void>();
  @Output() confirm = new EventEmitter<void>();
  @Input() title: string = ""
  @Input() confirmIcon: string = ""
  @Input() refuseIcon: string = ""

  handleCloseModal() {
    this.closeModal.emit()
  }

  handleConfirm() {
    this.confirm.emit()
  }
}
