import { Component, inject, Input, OnChanges } from '@angular/core';
import { FilterService } from '../../../services/filter/filter.service';
import { filter } from 'rxjs';

@Component({
  selector: 'app-checkbox',
  standalone: true,
  imports: [],
  templateUrl: './checkbox.component.html',
  styleUrl: './checkbox.component.scss'
})
export class CheckboxComponent {

  filterService = inject(FilterService)

  @Input() title = ""
  @Input() type = ""

  handleCheck(event: Event) {

    const checked = (event.target as HTMLInputElement).checked

    if(this.type == "supplier") {
      if(checked) {
        this.filterService.addSupplier(this.title)
      }
      else {
        this.filterService.removeSupplier(this.title)
      }
    }
    else if(this.type == "category") {
      if(checked) {
        this.filterService.addCategory(this.title)
      }
      else {
        this.filterService.removeCategory(this.title)
      }
    }
  }

}
