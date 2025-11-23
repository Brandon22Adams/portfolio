import { Component, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ProjectID } from '../projects.const';

@Component({
  selector: 'app-project-dialog-wrapper',
  imports: [],
  templateUrl: './project-dialog-wrapper.html',
  styleUrl: './project-dialog-wrapper.scss',
})
export class ProjectDialogWrapper {
  readonly dialogRef = inject(MatDialogRef<ProjectDialogWrapper>);
  readonly data = inject<{id: ProjectID}>(MAT_DIALOG_DATA);



}
