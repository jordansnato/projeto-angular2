import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoBildingText } from './two-bilding-text';

describe('TwoBildingText', () => {
  let component: TwoBildingText;
  let fixture: ComponentFixture<TwoBildingText>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TwoBildingText],
    }).compileComponents();

    fixture = TestBed.createComponent(TwoBildingText);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
