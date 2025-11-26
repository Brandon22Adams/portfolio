import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDivider } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { Carousel } from '../../../carousel/carousel';

@Component({
  selector: 'app-sintas-clayworks',
  imports: [MatIconModule, MatDivider, MatButtonModule, Carousel],
  templateUrl: './sintas-clayworks.html',
  styleUrl: './sintas-clayworks.scss',
})
export class SintasClayworks {
  public carouselImages: Array<string> = ['sintas/sintasTour.gif']

  public openGithubInNewTab(): void {
    window.open('https://github.com/Brandon22Adams/sintasclayworks', '_blank')?.focus()
  }
}
