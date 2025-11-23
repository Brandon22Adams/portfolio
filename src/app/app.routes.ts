import { Routes } from '@angular/router';
import { Landing } from './pages/landing/landing';
import { AboutMe } from './pages/about-me/about-me';
import { Contact } from './pages/contact/contact';
import { Projects } from './pages/projects/projects';

export enum routeEnum {
  home = '', about = 'about', projects = 'projects', contact = 'contact'
}

export const routes: Routes = [
  {
    path: routeEnum.home, component: Landing
  },
  {
    path: routeEnum.about, component: AboutMe
  },
  {
    path: routeEnum.projects, component: Projects
  },
  {
    path: routeEnum.contact, component: Contact
  },

  { path: '**', redirectTo: routeEnum.home }
];
