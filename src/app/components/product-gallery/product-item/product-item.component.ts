import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.scss'
})
export class ProductItemComponent {
  @Input() title: string = ""
  @Input() supplier: string = ""
  @Input() description: string = ""
  @Input() imgUrl: string = ""
  @Input() category: string = ""
  @Input() price: number | "Preço Indisponível" = "Preço Indisponível"

}
