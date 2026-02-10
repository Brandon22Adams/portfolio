import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HytaleBiomes } from './hytale-biomes';

describe('HytaleBiomes', () => {
  let component: HytaleBiomes;
  let fixture: ComponentFixture<HytaleBiomes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HytaleBiomes]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HytaleBiomes);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
