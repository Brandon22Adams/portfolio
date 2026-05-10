import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDivider } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { Carousel } from '../../../carousel/carousel';

@Component({
  selector: 'app-hytale-biomes',
  imports: [MatIconModule, MatDivider, MatButtonModule, Carousel],
  templateUrl: './hytale-biomes.html',
  styleUrl: './hytale-biomes.scss',
})
export class HytaleBiomes {

  public carouselImages: Array<string> = ['hytaleBiomes/sunspirePlateaus.mp4', 'hytaleBiomes/sunspire.png', 'hytaleBiomes/sunspireNight.png', 'hytaleBiomes/sunspireCave.png', 'hytaleBiomes/sunspireCaveInterior.png', 'hytaleBiomes/void1.png','hytaleBiomes/void2.png','hytaleBiomes/layered1.png','hytaleBiomes/island1.png','hytaleBiomes/island2.png','hytaleBiomes/echo1.png','hytaleBiomes/echo2.png','hytaleBiomes/candy1.png','hytaleBiomes/candy2.png']

  public openVoidProjectInNewTab(): void {
    window.open('https://www.curseforge.com/hytale/mods/biome-void-concept', '_blank')?.focus()
  }

  public openSunspireProjectInNewTab(): void {
    window.open('https://www.curseforge.com/hytale/mods/sunspire-plateau', '_blank')?.focus()
  }
}
