import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDivider } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { Carousel } from '../../../carousel/carousel';

@Component({
  selector: 'app-hytale',
  imports: [MatIconModule, MatDivider, MatButtonModule, Carousel],
  templateUrl: './hytale.html',
  styleUrl: './hytale.scss',
})
export class Hytale {

  public carouselImages: Array<string> = ['hytale/antlers.png', 'hytale/biome.png', 'hytale/hytaleMira.png', 'hytale/miwa.jpeg']

  public openProjectInNewTab(): void {
    window.open('https://www.curseforge.com/hytale/mods/antlers-helmet-additions', '_blank')?.focus()
  }
}
