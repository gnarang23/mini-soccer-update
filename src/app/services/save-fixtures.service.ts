import { Injectable } from '@angular/core';

import { Fixture } from '../models/fixture';

@Injectable({
  providedIn: 'root',
})
export class SaveFixturesService {
  private readonly teamFixturesCache: Map<string, Fixture[]> = new Map();
  constructor() {}

  saveToCache(key: string, fixtures: Fixture[]) {
    this.teamFixturesCache.set(key, fixtures);
  }

  getFromCache(key: string): Fixture[] {
    return this.teamFixturesCache.has(key)
      ? this.teamFixturesCache.get(key) ?? []
      : [];
  }
}
