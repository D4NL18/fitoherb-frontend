import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-images-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './images-carousel.component.html',
  styleUrl: './images-carousel.component.scss'
})
export class ImagesCarouselComponent {
  images = [
    'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Grosser_Panda.JPG/640px-Grosser_Panda.JPG',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4fb9-Mrcz1_0IhrLpCFzG7zisGz8OvqzNog&s',
    'https://s2-oglobo.glbimg.com/4_XjWnMCDLAxztquqgDyzw9TPv8=/0x0:1400x934/888x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_da025474c0c44edd99332dddb09cabe8/internal_photos/bs/2023/7/I/EMZ0YwQGG6bGeZwCMRwg/pandas.jpg',
    'https://s4.static.brasilescola.uol.com.br/img/2019/09/panda.jpg',
    'https://conteudo.imguol.com.br/c/noticias/bc/2020/08/18/panda-gigante-mei-xiang-no-zoologico-nacional-de-washington-nos-eua-1597792594233_v2_900x506.jpg',
  ];


  currentIndex = 0;
  transform = 'translateX(0)';
  

  next() {
    this.currentIndex = (this.currentIndex + 1);
    if (this.currentIndex === this.images.length - 2) {
      this.currentIndex = 0
    }
    this.updateTransform();
  }

  prev() {
    if(this.currentIndex === 0) {
      this.currentIndex = 2
    }else {
      this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
    }
    
    this.updateTransform();
  }

  updateTransform() {
    const offset = this.currentIndex * -330;
    this.transform = `translateX(${offset}px)`;
  }
}