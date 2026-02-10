import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBar } from "./nav-bar/nav-bar";
import { MatIconRegistry } from '@angular/material/icon';
import { Mobile } from './services/mobile';
import { NavBarService } from './nav-bar/nav-bar-service';
import { MatrixBackground } from "./matrix-background/matrix-background";
import { DomSanitizer } from '@angular/platform-browser';
import { isPlatformBrowser } from '@angular/common';
import { PLATFORM_ID, Inject } from '@angular/core';

const ICONS_CONST = [
  'angular',
  'csharp',
  'gimp',
  'typescript',
  'unity',
  'stripe',
  'express',
  'mongodb',
  'oauth',
  'rxjs',
  'azure',
  'jest',
  'godot',
  'git',
  'itchio',
  'linkedin',
  'blockbench',
  'java',
  'hytale',
];

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavBar, MatrixBackground],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  public isMobile: boolean = false;

  constructor(@Inject(PLATFORM_ID) private platformId: Object, private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer, private mobileService: Mobile, private navBarService: NavBarService) {
    matIconRegistry.setDefaultFontSetClass('material-symbols-outlined');
    this.registerIcons();
  }

  public ngOnInit(): void {
    this.isMobile = this.mobileService.isMobileDevice();
    this.navBarService.initiateCurrentRoute();
  }

  public registerIcons(): void {
    if (isPlatformBrowser(this.platformId)) {
      ICONS_CONST.forEach((icon) => {
        this.matIconRegistry.addSvgIcon(icon, this.domSanitizer.bypassSecurityTrustResourceUrl(`icons/${icon}.svg`));
      });
    }
  }

}
