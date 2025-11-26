import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDivider } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { Carousel } from '../../../carousel/carousel';

@Component({
  selector: 'app-tool-pouch',
  imports: [MatIconModule, MatDivider, MatButtonModule, Carousel],
  templateUrl: './tool-pouch.html',
  styleUrl: './tool-pouch.scss',
})
export class ToolPouch {
  public carouselImages: Array<string> = ['toolPouch/toolWheel5.png', 'toolPouch/letter.png', 'toolPouch/pouchOpen.png', 'toolPouch/toolWheelFull9.png']

  public openProjectInNewTab(): void {
    window.open('https://www.nexusmods.com/stardewvalley/mods/25136', '_blank')?.focus()
  }

  public openGithubInNewTab(): void {
    window.open('https://github.com/Brandon22Adams/ToolPouch', '_blank')?.focus()
  }
}
