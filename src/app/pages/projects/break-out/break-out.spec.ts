import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreakOut } from './break-out';

describe('BreakOut', () => {
  let component: BreakOut;
  let fixture: ComponentFixture<BreakOut>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BreakOut]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BreakOut);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
