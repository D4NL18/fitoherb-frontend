import { Component, EventEmitter, Output } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-searchbar',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './searchbar.component.html',
  styleUrl: './searchbar.component.scss'
})
export class SearchbarComponent {

  @Output() filterText: EventEmitter<string> = new EventEmitter<string>()

  handleTextChange(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    
    if (inputElement && inputElement.value) {
      this.filterText.emit(inputElement.value);
    }
  }
}
