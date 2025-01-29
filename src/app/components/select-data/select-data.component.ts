import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { SelectItem } from '../../types/SelectItem.interface';
import { SelectedItemService } from '../../services/selectedItem/selected-item.service';

@Component({
  selector: 'app-select-data',
  standalone: true,
  imports: [],
  templateUrl: './select-data.component.html',
  styleUrl: './select-data.component.scss'
})
export class SelectDataComponent {

  selectedItem = inject(SelectedItemService)

  @Input() items: SelectItem[] = []

  handleChange(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    this.selectedItem.setSelectedItem = selectElement.value
  }

}
