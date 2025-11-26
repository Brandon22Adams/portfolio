import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatDivider } from "@angular/material/divider";
import { MatButtonModule } from '@angular/material/button';
import { Carousel } from "../../../carousel/carousel";

@Component({
  selector: 'app-ghostie',
  imports: [MatIconModule, MatDivider, MatButtonModule, Carousel],
  templateUrl: './ghostie.html',
  styleUrl: './ghostie.scss',
})
export class Ghostie {

  public carouselImages: Array<string> = ['ghostie/trailer.mp4', 'ghostie/sprites.png', 'ghostie/before.png', 'ghostie/beforeAfter.png', 'ghostie/after.png']

  public openProjectInNewTab(): void {
    window.open('https://codewordz.itch.io/ghostie', '_blank')?.focus()
  }
}
