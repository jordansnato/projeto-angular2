import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExemploSignalForm } from './exemplo-signal-form';

describe('ExemploSignalForm', () => {
  let component: ExemploSignalForm;
  let fixture: ComponentFixture<ExemploSignalForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExemploSignalForm],
    }).compileComponents();

    fixture = TestBed.createComponent(ExemploSignalForm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
