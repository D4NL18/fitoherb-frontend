import { Component } from '@angular/core';
import { ItemComponent } from './item/item.component';
import { ButtonApplyComponent } from "./button-apply/button-apply.component";

@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [ItemComponent, ButtonApplyComponent],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss'
})
export class FilterComponent {

  categories = [
    { title: "Tecnologia", boxes: ["box1", "box2", "box3"] },
    { title: "Mobiliário", boxes: ["box4", "box5", "box6"] },
    { title: "Eletrodomésticos", boxes: ["box7", "box8", "box9"] },
    { title: "Moda", boxes: ["box10", "box11", "box12"] },
  ];

}
