import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { CommonModule } from '@angular/common';

interface CarouselImage {
  src: string;
  alt: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MatToolbarModule,
    MatCardModule,
    MatListModule,
    CommonModule
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'asenovgrad-city';

  images: CarouselImage[] = [
    { src: 'https://www.asenovgrad.bg/uploads/pages/asenovgrad11.jpg', alt: 'Asenovgrad 1' },
    { src: 'https://cdn.marica.bg/images/marica.bg/1082/1200_asenovgrad-ploshtad-remont.webp', alt: 'Asenovgrad Square' },
    { src: 'assets/img/asenovgradskakompaniq.jpg', alt: 'Asenovgrad Company' }
  ];
  
  currentIndex: number = 0;

  prevSlide(): void {
    this.currentIndex = (this.currentIndex > 0) ? this.currentIndex - 1 : this.images.length - 1;
  }

  nextSlide(): void {
    this.currentIndex = (this.currentIndex < this.images.length - 1) ? this.currentIndex + 1 : 0;
  }
}
