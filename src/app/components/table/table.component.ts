import { Component, EventEmitter, Input, Output } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})
export class TableComponent {

  @Input() columns: { key: string; label: string }[] = [];
  @Input() data: any[] = [];

  @Output() clickedDelete = new EventEmitter<any>()
  @Output() clickedEdit = new EventEmitter<any>()

  handleDelete(i: number) {
    this.clickedDelete.emit(i)
  }
  handleEdit(i: number) {
    this.clickedEdit.emit(i)
  }
}
