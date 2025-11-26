import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDivider } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { Carousel } from '../../../carousel/carousel';

@Component({
  selector: 'app-break-out',
  imports: [MatIconModule, MatDivider, MatButtonModule, Carousel],
  templateUrl: './break-out.html',
  styleUrl: './break-out.scss',
})
export class BreakOut {
  public carouselImages: Array<string> = ['breakOut/trailer.mp4', 'breakOut/level.png', 'breakOut/levelSelect.png']

  public openProjectInNewTab(): void {
    window.open('https://codewordz.itch.io/break-out-vs', '_blank')?.focus()
  }

  public openProject2InNewTab(): void {
    window.open('https://codewordz.itch.io/block-breaker-vs-20', '_blank')?.focus()
  }
}
