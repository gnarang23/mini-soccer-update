import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTeamFixturesComponent } from './list-team-fixtures.component';

describe('ListTeamFixturesComponent', () => {
  let component: ListTeamFixturesComponent;
  let fixture: ComponentFixture<ListTeamFixturesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListTeamFixturesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTeamFixturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
