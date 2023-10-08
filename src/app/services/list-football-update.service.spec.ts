import { TestBed } from '@angular/core/testing';

import { ListFootballUpdateService } from './list-football-update.service';

describe('ListFootballUpdateService', () => {
  let service: ListFootballUpdateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListFootballUpdateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
