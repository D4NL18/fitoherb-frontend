import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

constructor(private router: Router) {}

thisPage: 'home' | 'about' | 'products' | 'suppliers' | 'contact' = 'home'
 
ngOnInit(): void {
  this.updateCurrentPage();
}

updateCurrentPage(): void {
  const path = this.router.url.split('/')[1];
  this.thisPage = (path || 'home') as typeof this.thisPage;
}
}
