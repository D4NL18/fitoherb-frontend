import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { SelectedItemService } from '../../services/selectedItem/selected-item.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent implements OnDestroy {

  selectedItemService = inject(SelectedItemService)
  updatedItem$ = this.selectedItemService.textUpdated$;

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
        this.text == "Categoria de Produto"
      }
    })
    this.updatedTextSubscription.add(sub)
  }

  ngOnDestroy(): void {
    this.updatedTextSubscription.unsubscribe()
  }

  handleClick() {
    console.log("button works")
  }

}
