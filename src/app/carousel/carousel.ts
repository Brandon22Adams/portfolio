import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-carousel',
  imports: [MatButtonModule, MatIconModule, MatDividerModule],
  templateUrl: './carousel.html',
  styleUrl: './carousel.scss',
})
export class Carousel {

  constructor() {}

  @Input() public set images(images: Array<string>) {
    this.allImages = images;
    this.listLength = images.length - 1;
  };
  public allImages: Array<string> = [];
  public currentIndex = 0;
  public listLength = 999;

  public getPrev() {
    this.currentIndex = this.currentIndex === 0 ? 0 : this.currentIndex - 1;
  }

  public getNext() {
    this.currentIndex = this.currentIndex === this.listLength ? this.currentIndex : this.currentIndex + 1;
  }
}
