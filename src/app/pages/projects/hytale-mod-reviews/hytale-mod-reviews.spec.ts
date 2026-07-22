import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HytaleModReviews } from './hytale-mod-reviews';

describe('HytaleModReviews', () => {
  let component: HytaleModReviews;
  let fixture: ComponentFixture<HytaleModReviews>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HytaleModReviews]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HytaleModReviews);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
