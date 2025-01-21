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

  // images = [
  //   'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Grosser_Panda.JPG/640px-Grosser_Panda.JPG',
  //   'https://static.mundoeducacao.uol.com.br/mundoeducacao/2023/03/panda-vermelho-arvore.jpg',
  //   'https://s2-oglobo.glbimg.com/4_XjWnMCDLAxztquqgDyzw9TPv8=/0x0:1400x934/888x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_da025474c0c44edd99332dddb09cabe8/internal_photos/bs/2023/7/I/EMZ0YwQGG6bGeZwCMRwg/pandas.jpg',
  //   'https://static.preparaenem.com/2023/03/panda-vermelho-deitado-no-galho-de-uma-arvore.jpg',
  //   'https://s4.static.brasilescola.uol.com.br/img/2019/09/panda.jpg',
  //   'https://ambientalistasemrede.wordpress.com/wp-content/uploads/2012/06/282703_304853429603076_349697252_n.jpg?w=960',
  //   'https://conteudo.imguol.com.br/c/noticias/bc/2020/08/18/panda-gigante-mei-xiang-no-zoologico-nacional-de-washington-nos-eua-1597792594233_v2_900x506.jpg',
  // ];

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
