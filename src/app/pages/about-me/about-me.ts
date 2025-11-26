import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatDivider } from "@angular/material/divider";
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-about-me',
  imports: [MatDivider, MatIconModule, MatCardModule],
  templateUrl: './about-me.html',
  styleUrl: './about-me.scss',
})
export class AboutMe {

}
