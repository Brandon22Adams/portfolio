import { Component, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { Mobile } from '../../services/mobile';
import { IProject, ProjectID, PROJECTS_CONST } from './projects.const';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { ProjectDialogWrapper } from './project-dialog-wrapper/project-dialog-wrapper';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-projects',
  imports: [MatCardModule, MatIconModule, MatButtonModule],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {

  public isMobile: boolean = false;
  public allProjects: Array<IProject> = PROJECTS_CONST;

  private readonly dialog = inject(MatDialog);

  constructor(private mobileService: Mobile) {}

  public ngOnInit(): void {
    this.isMobile = this.mobileService.isMobileDevice();
  }

  public openProject(id: ProjectID): void {
    this.dialog.open(ProjectDialogWrapper, {
      data: {id},
    });
  }

}
