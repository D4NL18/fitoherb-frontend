import { Component, EventEmitter, Output } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-logout',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './logout.component.html',
  styleUrl: './logout.component.scss'
})
export class LogoutComponent {

  @Output() logout = new EventEmitter<void>();

  handleClick() {
    this.logout.emit();
  }
}
