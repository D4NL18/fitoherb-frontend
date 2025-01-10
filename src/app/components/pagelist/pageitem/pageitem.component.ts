import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-pageitem',
  standalone: true,
  imports: [],
  templateUrl: './pageitem.component.html',
  styleUrl: './pageitem.component.scss'
})
export class PageitemComponent {
  @Input() index: number = 0;
  @Output() pageClicked = new EventEmitter<number>();

  handleClick() {
    this.pageClicked.emit(this.index);
  }
}
