import { Injectable, signal } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { routeEnum } from '../app.routes';
import { filter, take } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NavBarService {

  public currentRoute = signal(routeEnum.home);

  constructor(private router: Router) {}

  public initiateCurrentRoute(): void {
    console.log(this.router.url)
    this.router.events
    .pipe(filter(event => event instanceof NavigationEnd), take(1))
    .subscribe((event: NavigationEnd) => {
      this.currentRoute.set(this.router.url.replace(/\//g, '') as routeEnum);
    });
  }

  public navigateTo(route: routeEnum): void {
    this.router.navigate([`./${route}`]);
    this.currentRoute.set(route);
  }
}
