import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { Mobile } from '../../services/mobile';
import { routeEnum } from '../../app.routes';
import { NavBarService } from '../../nav-bar/nav-bar-service';
import { IProject, ProjectID, PROJECTS_CONST } from '../projects/projects.const';
import { MatDialog } from '@angular/material/dialog'
import { ProjectDialogWrapper } from '../projects/project-dialog-wrapper/project-dialog-wrapper';

@Component({
  selector: 'app-landing',
  imports: [MatButtonModule, MatDividerModule, MatCardModule, MatIconModule],
  templateUrl: './landing.html',
  styleUrl: './landing.scss',
  host: { ngSkipHydration: 'true' }
})
export class Landing {

  public isMobile: boolean = false;
  public routeEnum = routeEnum;
  public featuredProjects: Array<IProject> = PROJECTS_CONST.filter((project) => project.id === ProjectID.hytaleBiomes || project.id === ProjectID.hytale);

  private readonly dialog = inject(MatDialog);

  constructor(private mobileService: Mobile, private navBarService: NavBarService) {}

  public ngOnInit(): void {
    this.isMobile = this.mobileService.isMobileDevice();
  }

  public navigateTo(route: routeEnum): void {
    this.navBarService.navigateTo(route);
  }

  public openProject(id: ProjectID): void {
    this.dialog.open(ProjectDialogWrapper, {
      data: {id},
    });
  }

}
