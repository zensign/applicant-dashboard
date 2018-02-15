import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { DetailsComponent } from './details.component';
import { ApplicantDashboardService } from '../../services/applicant-dashboard.service';

import { FontAwesomeMock,
  KeysMock,
  applicantDashboardServiceMock } from '../../../test-mocks';

describe('DetailsComponent', () => {
  let component: DetailsComponent;
  let fixture: ComponentFixture<DetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations:
        [ DetailsComponent, FontAwesomeMock, KeysMock ],
      imports:
        [ RouterTestingModule ],
      providers:
        [{ provide: ApplicantDashboardService, useValue: applicantDashboardServiceMock }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
