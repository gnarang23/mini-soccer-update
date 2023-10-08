import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListCountriesComponent } from './list-countries/list-countries.component';
import { ListTeamFixturesComponent } from './list-team-fixtures/list-team-fixtures.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'football-updates',
  },
  {
    path: 'football-updates',
    children: [
      { path: '', component: ListCountriesComponent },
      {
        path: 'top-league/:league',
        component: ListCountriesComponent,
      },
      { path: 'top-league/:league/team/:teamId', component: ListTeamFixturesComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
