import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-images-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './images-carousel.component.html',
  styleUrl: './images-carousel.component.scss'
})
export class ImagesCarouselComponent {

  @Input() numImg: number = 3;
  @Input() sizeImg: number = 300
  @Input() images: Array<String> = []

  currentIndex = 0;
  transform = 'translateX(0)';
  

  next() {
    this.currentIndex = (this.currentIndex + 1);
    if (this.currentIndex === this.images.length - (this.numImg - 1)) {
      this.currentIndex = 0
    }
    this.updateTransform();
  }

  prev() {
    if(this.currentIndex === 0 && this.numImg != 1) {
      this.currentIndex = (this.numImg - 1)
    }else {
      this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
    }
    
    this.updateTransform();
  }

  updateTransform() {
    const offset = this.currentIndex * - (this.sizeImg);
    this.transform = `translateX(${offset}px)`;
  }
}