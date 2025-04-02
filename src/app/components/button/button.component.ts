import { Component, EventEmitter, inject, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { SelectedItemService } from '../../services/selectedItem/selected-item.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent implements OnInit, OnDestroy {

  selectedItemService = inject(SelectedItemService)
  updatedItem$ = this.selectedItemService.textUpdated$;

  @Input() buttonType: string = "button"

  @Output() clicked = new EventEmitter<any>()

  updatedTextSubscription = new Subscription()
  
  text: string = "Produtos"

  constructor() {
    const sub = this.updatedItem$.subscribe((text) => {
      if(text=="products") {
        this.text = "Produtos"
      }else if(text=="suppliers") {
        this.text = "Fornecedores"
      }else if(text == "users") {
        this.text = "Usuários"
      }else if(text == "categories") {
        this.text = "Categoria de Produto"
      }
    })
    this.updatedTextSubscription.add(sub)
  }
  ngOnInit(): void {
    this.text = this.selectedItemService.getSelectedItem
    if(this.text=="products") {
      this.text = "Produtos"
    }else if(this.text=="suppliers") {
      this.text = "Fornecedores"
    }else if(this.text == "users") {
      this.text = "Usuários"
    }else if(this.text == "categories") {
      this.text = "Categoria de Produto"
    }
    
  }

  ngOnDestroy(): void {
    this.updatedTextSubscription.unsubscribe()
  }

  handleClick() {
    this.clicked.emit()
  }

}
