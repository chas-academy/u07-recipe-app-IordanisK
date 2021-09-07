import { TestBed } from '@angular/core/testing';

import { RecipeFavoritesService } from './recipe-favorites.service';

describe('RecipeFavoritesService', () => {
  let service: RecipeFavoritesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecipeFavoritesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
