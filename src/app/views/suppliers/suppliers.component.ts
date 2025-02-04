import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { FooterComponent } from "../../components/footer/footer.component";
import { ImagesCarouselComponent } from "../../components/images-carousel/images-carousel.component";
import { SuppliersService } from '../../services/suppliers/suppliers.service';
import { Supplier } from '../../types/Supplier.interface';

@Component({
  selector: 'app-suppliers',
  standalone: true,
  imports: [NavbarComponent, FooterComponent, ImagesCarouselComponent],
  templateUrl: './suppliers.component.html',
  styleUrl: './suppliers.component.scss'
})
export class SuppliersComponent implements OnInit {

  constructor(private suppliersService: SuppliersService) {}

  imagesUrl: string = "http://localhost:8080/"

  suppliers: Supplier[] = [];
  imagesMaster: Array<String> = []
  imagesNormal: Array<String> = []

  ngOnInit() {
    this.loadSuppliers()
  }

  loadSuppliers() {
    this.suppliersService.getAllSuppliers().subscribe({
      next: (response) => {
        this.suppliers = response
        this.loadImages(this.suppliers)
      }
    })
  }

  loadImages(suppliers: Supplier[]): void {
    suppliers.forEach((supplier) => {
      console.log(supplier)
      if (supplier.imagePath && supplier.master) {
        const imageUrl =  this.imagesUrl + supplier.imagePath;
        this.imagesMaster.push(imageUrl);
      }
      else if(supplier.imagePath && !supplier.master) {
        const imageUrl =  this.imagesUrl + supplier.imagePath;
        this.imagesNormal.push(imageUrl);
      }
    });
  }

}
