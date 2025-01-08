import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cards-about',
  standalone: true,
  imports: [],
  templateUrl: './cards-about.component.html',
  styleUrl: './cards-about.component.scss'
})
export class CardsAboutComponent {
  @Input() title: string = ""
  @Input() text: string = ""
}
