import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Froge } from './froge';

describe('Froge', () => {
  let component: Froge;
  let fixture: ComponentFixture<Froge>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Froge]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Froge);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
