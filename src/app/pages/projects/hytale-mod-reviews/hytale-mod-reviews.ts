import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDivider } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { Carousel } from '../../../carousel/carousel';

@Component({
  selector: 'app-hytale-mod-reviews',
  imports: [MatIconModule, MatDivider, MatButtonModule, Carousel],
  templateUrl: './hytale-mod-reviews.html',
  styleUrl: './hytale-mod-reviews.scss',
})
export class HytaleModReviews {

  public carouselImages: Array<string> = ['hytaleModReviews/home.png', 'hytaleModReviews/browse.png', 'hytaleModReviews/recent.png']

  public openProjectInNewTab(): void {
    window.open('https://www.hytalemodreviews.com/', '_blank')?.focus()
  }
}
