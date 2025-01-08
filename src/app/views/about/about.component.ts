import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { CardsAboutComponent } from '../../components/cards-about/cards-about.component';
import { ImagesCarouselComponent } from "../../components/images-carousel/images-carousel.component";
import { FooterComponent } from "../../components/footer/footer.component";

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [NavbarComponent, CardsAboutComponent, ImagesCarouselComponent, FooterComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {

}
