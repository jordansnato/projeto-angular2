import { TestBed } from '@angular/core/testing';

import { RequisicaoPostService } from './requisicao-post-service';

describe('RequisicaoPostService', () => {
  let service: RequisicaoPostService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RequisicaoPostService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
