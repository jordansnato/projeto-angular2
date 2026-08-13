import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Execicio5 } from './execicio5';

describe('Execicio5', () => {
  let component: Execicio5;
  let fixture: ComponentFixture<Execicio5>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Execicio5],
    }).compileComponents();

    fixture = TestBed.createComponent(Execicio5);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
