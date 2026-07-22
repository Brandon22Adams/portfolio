import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDivider } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { Carousel } from '../../../carousel/carousel';

@Component({
  selector: 'app-froge',
  imports: [MatIconModule, MatDivider, MatButtonModule, Carousel],
  templateUrl: './froge.html',
  styleUrl: './froge.scss',
})
export class Froge {
  public carouselImages: Array<string> = ['froge/frogeGameplay.gif', 'froge/coverArt.png', 'froge/miwa.jpg']

  public openProjectInNewTab(): void {
    window.open('https://codewordz.itch.io/froge', '_blank')?.focus()
  }
}
