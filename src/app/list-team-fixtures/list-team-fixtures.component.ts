import { Component, OnDestroy, OnInit } from '@angular/core';
import { Fixture } from '../models/fixture';
import { ListFootballUpdateService } from '../services/list-football-update.service';
import { ActivatedRoute, Router } from '@angular/router';
import { SaveFixturesService } from '../services/save-fixtures.service';
import { Subscription } from 'rxjs';
import { BaseResponse } from '../models/base-response';

@Component({
  selector: 'app-list-team-fixtures',
  templateUrl: './list-team-fixtures.component.html',
  styleUrls: ['./list-team-fixtures.component.scss'],
})
export class ListTeamFixturesComponent implements OnInit, OnDestroy {
  fixtures: Fixture[] = [];
  private league: number = 0;
  private teamId: number = 0;
  private readonly sub = new Subscription();

  constructor(
    private readonly listFootBallUpdateService: ListFootballUpdateService,
    private readonly saveFixturesService: SaveFixturesService,
    private readonly route: ActivatedRoute,
    private readonly router: Router
  ) {}

  ngOnInit(): void {
    this.league = Number(this.route.snapshot.paramMap.get('league'));
    this.teamId = Number(this.route.snapshot.paramMap.get('teamId'));
    this.getFixtures(this.league, this.teamId);
  }

  back() {
    this.router.navigate(['/football-updates/top-league', this.league]);
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  private getFixtures(league: number, team: number) {
    const key = league + '-' + team;
    const listOfFixtures = this.saveFixturesService.getFromCache(key);
    listOfFixtures?.length === 0
      ? this.sub.add(
          this.listFootBallUpdateService
            .getTeamFixtures(league, team)
            .subscribe({
              next: (r: BaseResponse<Fixture>) => {
                this.fixtures = r?.response;
                console.log(this.fixtures);
                this.saveFixturesService.saveToCache(key, this.fixtures);
              },
              error: (e) => {
                console.log(e);
              },
            })
        )
      : (this.fixtures = listOfFixtures);
  }
}
