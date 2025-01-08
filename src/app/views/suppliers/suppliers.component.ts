import { Component } from '@angular/core';
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { FooterComponent } from "../../components/footer/footer.component";
import { ImagesCarouselComponent } from "../../components/images-carousel/images-carousel.component";

@Component({
  selector: 'app-suppliers',
  standalone: true,
  imports: [NavbarComponent, FooterComponent, ImagesCarouselComponent],
  templateUrl: './suppliers.component.html',
  styleUrl: './suppliers.component.scss'
})
export class SuppliersComponent {

}
