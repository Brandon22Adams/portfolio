import { Routes } from '@angular/router';
import { Landing } from './pages/landing/landing';
import { AboutMe } from './pages/about-me/about-me';

export const routes: Routes = [
  {
    path: '', component: Landing
  },
  {
    path: 'about-me', component: AboutMe
  }
];
