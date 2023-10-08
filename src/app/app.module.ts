import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListCountriesComponent } from './list-countries/list-countries.component';
import { HttpClientModule } from '@angular/common/http';
import { ListTeamFixturesComponent } from './list-team-fixtures/list-team-fixtures.component';

@NgModule({
  declarations: [
    AppComponent,
    ListCountriesComponent,
    ListTeamFixturesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
