import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectDialogWrapper } from './project-dialog-wrapper';

describe('ProjectDialogWrapper', () => {
  let component: ProjectDialogWrapper;
  let fixture: ComponentFixture<ProjectDialogWrapper>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectDialogWrapper]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectDialogWrapper);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
