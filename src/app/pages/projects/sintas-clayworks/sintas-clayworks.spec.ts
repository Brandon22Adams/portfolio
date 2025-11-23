import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SintasClayworks } from './sintas-clayworks';

describe('SintasClayworks', () => {
  let component: SintasClayworks;
  let fixture: ComponentFixture<SintasClayworks>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SintasClayworks]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SintasClayworks);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
