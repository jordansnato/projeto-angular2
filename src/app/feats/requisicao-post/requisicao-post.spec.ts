import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequisicaoPost } from './requisicao-post';

describe('RequisicaoPost', () => {
  let component: RequisicaoPost;
  let fixture: ComponentFixture<RequisicaoPost>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RequisicaoPost],
    }).compileComponents();

    fixture = TestBed.createComponent(RequisicaoPost);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
