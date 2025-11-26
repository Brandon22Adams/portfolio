import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolBelt } from './tool-pouch';

describe('ToolBelt', () => {
  let component: ToolBelt;
  let fixture: ComponentFixture<ToolBelt>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToolBelt]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToolBelt);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
