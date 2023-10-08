import { Standings } from './standings';

export interface League {
  id: number;
  name: string;
  country: string;
  logo: string;
  flag: string;
  season: number;
  round?: string;
  standings?: Standings[][];
}

export interface Leagues {
  league: League;
}
