import { Component, inject, model } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ProjectID } from '../projects.const';
import { MatIconModule } from '@angular/material/icon';
import { SintasClayworks } from '../sintas-clayworks/sintas-clayworks';
import { Ghostie } from '../ghostie/ghostie';
import { BreakOut } from '../break-out/break-out';
import { Froge } from '../froge/froge';
import { GlitchWar } from '../glitch-war/glitch-war';
import { ToolBelt } from '../tool-belt/tool-belt';

@Component({
  selector: 'app-project-dialog-wrapper',
  imports: [MatIconModule, SintasClayworks, Ghostie, BreakOut, Froge, GlitchWar, ToolBelt],
  templateUrl: './project-dialog-wrapper.html',
  styleUrl: './project-dialog-wrapper.scss',
})
export class ProjectDialogWrapper {
  readonly dialogRef = inject(MatDialogRef<ProjectDialogWrapper>);
  public readonly data = inject<{id: ProjectID}>(MAT_DIALOG_DATA);
  public readonly projectIDs = ProjectID;

  constructor() {}

  public close(): void {
    this.dialogRef.close();
  }

}
