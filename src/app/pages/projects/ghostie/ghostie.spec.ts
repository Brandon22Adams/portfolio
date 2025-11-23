import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ghostie } from './ghostie';

describe('Ghostie', () => {
  let component: Ghostie;
  let fixture: ComponentFixture<Ghostie>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ghostie]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ghostie);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
