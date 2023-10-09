import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, map, of, tap } from 'rxjs';
import { Standings } from '../models/standings';
import { BaseResponse } from '../models/base-response';
import { Fixture } from '../models/fixture';
import { Leagues } from '../models/league';

@Injectable({
  providedIn: 'root',
})
export class ListFootballUpdateService {
  private readonly path: string = 'https://v3.football.api-sports.io';
  private readonly headers = {
    'x-rapidapi-key': '44ae16ee0dfe663e9140b73516460aef',
  };
  private readonly leagueStandingsCache: Map<number, Standings[]> = new Map();

  constructor(private http: HttpClient) {}

  getLeagueStandings(league: number, season: number): Observable<Standings[]> {
    const parameters = new HttpParams({
      fromObject: { league, season },
    });

    return this.leagueStandingsCache.has(league)
      ? of(this.leagueStandingsCache.get(league) ?? [])
      : this.http
          .get<BaseResponse<Leagues>>(`${this.path}/standings`, {
            headers: this.headers,
            params: parameters,
          })
          .pipe(
            map(
              (data: BaseResponse<Leagues>) =>
                data?.response[0]?.league?.standings?.find(
                  (standings, index) => index === 0
                ) || []
            ),
            tap((data) => this.leagueStandingsCache.set(league, data))
          );
  }

  getTeamFixtures(
    league: number,
    team: number,
    last = 10
  ): Observable<BaseResponse<Fixture>> {
    const parameters = new HttpParams({
      fromObject: { league, team, last },
    });

    return this.http
      .get<BaseResponse<Fixture>>(`${this.path}/fixtures`, {
        headers: this.headers,
        params: parameters,
      });
  }
}
