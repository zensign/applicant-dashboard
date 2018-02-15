import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { DashboardComponent } from './dashboard.component';
import { ApplicantDashboardService } from '../../services/applicant-dashboard.service';

import { FontAwesomeMock, 
  AppSortMock,
  TableSortMock,
  TableFilterMock,
  TableFavoritedMock,
  applicantDashboardServiceMock } from '../../../test-mocks';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: 
        [ DashboardComponent,
          FontAwesomeMock,
          AppSortMock,
          TableSortMock,
          TableFilterMock,
          TableFavoritedMock],
      imports: 
        [RouterTestingModule],
      providers: 
        [{ provide: ApplicantDashboardService, useValue: applicantDashboardServiceMock }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
