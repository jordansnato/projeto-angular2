import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exercicio } from './exercicio';

describe('Exercicio', () => {
  let component: Exercicio;
  let fixture: ComponentFixture<Exercicio>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Exercicio],
    }).compileComponents();

    fixture = TestBed.createComponent(Exercicio);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
