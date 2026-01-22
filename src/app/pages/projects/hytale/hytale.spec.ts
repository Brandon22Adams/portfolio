import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Hytale } from './hytale';

describe('Hytale', () => {
  let component: Hytale;
  let fixture: ComponentFixture<Hytale>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Hytale]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Hytale);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
