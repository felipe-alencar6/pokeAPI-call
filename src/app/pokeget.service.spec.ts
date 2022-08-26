import { TestBed } from '@angular/core/testing';

import { PokegetService } from './pokeget.service';

describe('PokegetService', () => {
  let service: PokegetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PokegetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
