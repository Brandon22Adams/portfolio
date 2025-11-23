import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBar } from "./nav-bar/nav-bar";
import { MatIconRegistry } from '@angular/material/icon';
import { Mobile } from './services/mobile';
import { NavBarService } from './nav-bar/nav-bar-service';
import { MatrixBackground } from "./matrix-background/matrix-background";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavBar, MatrixBackground],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  public isMobile: boolean = false;

  constructor(matIconRegistry: MatIconRegistry, private mobileService: Mobile, private navBarService: NavBarService) {
    matIconRegistry.setDefaultFontSetClass('material-symbols-outlined');
  }

  public ngOnInit(): void {
    this.isMobile = this.mobileService.isMobileDevice();
    this.navBarService.initiateCurrentRoute();
  }

}
