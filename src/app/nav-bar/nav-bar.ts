import { Component, effect } from '@angular/core';
import { MatIconModule } from '@angular/material/icon'
import { MatButtonModule } from '@angular/material/button'
import { Mobile } from '../services/mobile';
import { routeEnum } from '../app.routes';
import { NavBarService } from './nav-bar-service';

@Component({
  selector: 'app-nav-bar',
  imports: [MatIconModule, MatButtonModule],
  templateUrl: './nav-bar.html',
  styleUrl: './nav-bar.scss',
})
export class NavBar {
  public isMobile: boolean = false;
  public routeEnum = routeEnum;
  public currentRoute = routeEnum.home;

  constructor(private mobileService: Mobile, private navBarService: NavBarService) {
    effect(() => {
      this.currentRoute = this.navBarService.currentRoute();
    });
  }

  public ngOnInit(): void {
    this.isMobile = this.mobileService.isMobileDevice();
  }

  public navigateTo(route: routeEnum): void {
    this.navBarService.navigateTo(route);
  }

}
