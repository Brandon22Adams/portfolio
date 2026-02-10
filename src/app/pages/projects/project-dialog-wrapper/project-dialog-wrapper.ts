import { Component, inject, model } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ProjectID, PROJECTS_CONST } from '../projects.const';
import { MatIconModule } from '@angular/material/icon';
import { SintasClayworks } from '../sintas-clayworks/sintas-clayworks';
import { Ghostie } from '../ghostie/ghostie';
import { BreakOut } from '../break-out/break-out';
import { Froge } from '../froge/froge';
import { GlitchWar } from '../glitch-war/glitch-war';
import { ToolPouch } from '../tool-pouch/tool-pouch';
import { Mobile } from '../../../services/mobile';
import { Hytale } from '../hytale/hytale';
import { HytaleBiomes } from '../hytale-biomes/hytale-biomes';

@Component({
  selector: 'app-project-dialog-wrapper',
  imports: [MatIconModule, SintasClayworks, Ghostie, BreakOut, Froge, GlitchWar, ToolPouch, Hytale, HytaleBiomes],
  templateUrl: './project-dialog-wrapper.html',
  styleUrl: './project-dialog-wrapper.scss',
})
export class ProjectDialogWrapper {
  readonly dialogRef = inject(MatDialogRef<ProjectDialogWrapper>);
  private readonly data = inject<{id: ProjectID}>(MAT_DIALOG_DATA);
  public readonly projectIDs = ProjectID;
  public readonly currentProject = PROJECTS_CONST.find((project) => project.id === this.data.id);
  public isMobile: boolean = false;

  constructor(mobileService: Mobile) {
    this.isMobile = mobileService.isMobileDevice();
  }

  public close(): void {
    this.dialogRef.close();
  }

}
