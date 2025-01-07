import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { BannerCarouselComponent } from '../../components/banner-carousel/banner-carousel.component';
import { ImagesCarouselComponent } from "../../components/images-carousel/images-carousel.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent, FooterComponent, BannerCarouselComponent, ImagesCarouselComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
