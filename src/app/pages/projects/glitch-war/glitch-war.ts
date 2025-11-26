import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDivider } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { Carousel } from '../../../carousel/carousel';

@Component({
  selector: 'app-glitch-war',
  imports: [MatIconModule, MatDivider, MatButtonModule, Carousel],
  templateUrl: './glitch-war.html',
  styleUrl: './glitch-war.scss',
})
export class GlitchWar {
  public carouselImages: Array<string> = ['glitchWar/steamTrailer.mp4', 'glitchWar/capture1.png', 'glitchWar/capture2.png', 'glitchWar/capture3.png', 'glitchWar/capture4.png', 'glitchWar/capture5.png']

  public openProjectInNewTab(): void {
    window.open('https://store.steampowered.com/app/1388110/Glitch_War/', '_blank')?.focus()
  }
}
