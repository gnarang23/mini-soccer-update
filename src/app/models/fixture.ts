import { Team } from './standings';

export interface Fixture {
  teams: { home: Team; away: Team };
  goals: Goal;
}

export interface Goal {
  home: number | null;
  away: number | null;
}
