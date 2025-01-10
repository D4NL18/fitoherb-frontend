import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PageitemComponent } from './pageitem/pageitem.component';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-pagelist',
  standalone: true,
  imports: [PageitemComponent, MatIconModule],
  templateUrl: './pagelist.component.html',
  styleUrls: ['./pagelist.component.scss']
})
export class PagelistComponent {
  @Input() pags: number[] = [];
  @Input() offset: number = 0;
  @Input() maxVisible: number = 7;
  @Output() pageChange = new EventEmitter<number>();

  visiblePages: number[] = [];

  ngOnInit() {
    this.updateVisiblePages();
  }

  updateVisiblePages() {
    const end = this.offset + this.maxVisible;
    this.visiblePages = this.pags.slice(this.offset, end);
  }

  previousPageGroup() {
    this.offset -= this.maxVisible;
    this.updateVisiblePages();
  }

  nextPageGroup() {
    this.offset += this.maxVisible;
    this.updateVisiblePages();
  }

  onPageClick(page: number) {
    this.pageChange.emit(page);
  }
}