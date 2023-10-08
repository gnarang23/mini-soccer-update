import { TestBed } from '@angular/core/testing';

import { SaveFixturesService } from './save-fixtures.service';

describe('ListFixturesService', () => {
  let service: SaveFixturesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SaveFixturesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
