import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBar } from "./nav-bar/nav-bar";
import { MatIconRegistry } from '@angular/material/icon';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavBar],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  constructor(matIconRegistry: MatIconRegistry) {
    matIconRegistry.setDefaultFontSetClass('material-symbols-outlined');
  }

}
