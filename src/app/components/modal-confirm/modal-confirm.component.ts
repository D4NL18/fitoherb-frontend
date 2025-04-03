import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import { Router } from '@angular/router';
import { UserService } from '../../services/user/user.service';


@Component({
  selector: 'app-modal-logout',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './modal-confirm.component.html',
  styleUrl: './modal-confirm.component.scss'
})
export class ModalConfirmComponent {

  private router = inject(Router)
  private userService = inject(UserService)

  @Output() closeModal = new EventEmitter<void>();
  @Input() title: string = ""
  @Input() confirmIcon: string = ""
  @Input() refuseIcon: string = ""

  handleCloseModal() {
    this.closeModal.emit()
  }

  handleLogout() {
    this.userService.logout()
    this.router.navigate(['/admin'])
  }
}
