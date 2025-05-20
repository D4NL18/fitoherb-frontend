import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.scss'
})
export class ProductItemComponent implements OnInit {
  @Input() title: string = ""
  @Input() supplier: string = ""
  @Input() description: string = ""
  @Input() imgUrl: string = ""
  @Input() category: string = ""
  @Input() price: number | null = null

  formatedPrice: string = ""

  ngOnInit() {
    this.formatPrice()
  }

  formatPrice() {
    if(this.price) {
      this.price = this.price/100
      this.formatedPrice = this.price.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      });
    }
  }
    

}
