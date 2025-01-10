import { Component, Input } from '@angular/core';
import { CheckboxComponent } from '../checkbox/checkbox.component';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-item',
  standalone: true,
  imports: [CheckboxComponent, MatIconModule],
  templateUrl: './item.component.html',
  styleUrl: './item.component.scss'
})
export class ItemComponent {
  @Input() categories: any

  isClicked: boolean = false

  handleClick() {
    this.isClicked = !this.isClicked
  }
}
