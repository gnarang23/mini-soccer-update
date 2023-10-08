import { Component, OnInit } from '@angular/core';
import { ListFootballUpdateService } from '../services/list-football-update.service';
import { Standings } from '../models/standings';
import { Observable, catchError, of, tap } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-list-countries',
  templateUrl: './list-countries.component.html',
  styleUrls: ['./list-countries.component.scss'],
})
export class ListCountriesComponent implements OnInit {
  standings$: Observable<Standings[]> = of();
  currentYear = new Date().getFullYear();
  leagueId: number = 0;
  private readonly countryTopLeagueNameIdMap: Map<string, number> = new Map([
    ['England', 39],
    ['Spain', 140],
    ['France', 61],
    ['Germany', 78],
    ['Italy', 135],
  ]);
  constructor(
    private readonly listFootBallUpdateService: ListFootballUpdateService,
    private route : ActivatedRoute,
    private router : Router,
  ) {}

  ngOnInit(): void {
  const league = Number(this.route.snapshot.paramMap.get('league'));
    if (league) {
      this.getStandings('', league);
    }
  }

  getStandings(country: string, league?: number) {
    this.leagueId = league ?? this.countryTopLeagueNameIdMap.get(country) ?? 0;
    this.standings$ = this.listFootBallUpdateService
      .getLeagueStandings(this.leagueId, this.currentYear)
      .pipe(
        catchError((error) => {
          console.error('Failed to retrive standings:', error);
          return [];
        })
      );
      this.router.navigate(['/football-updates/top-league',this.leagueId]);
  }
}
