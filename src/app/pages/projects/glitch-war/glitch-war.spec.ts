import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlitchWar } from './glitch-war';

describe('GlitchWar', () => {
  let component: GlitchWar;
  let fixture: ComponentFixture<GlitchWar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GlitchWar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GlitchWar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
