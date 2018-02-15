import { TestBed, inject } from '@angular/core/testing';

import { ApplicantDashboardService } from './applicant-dashboard.service';

describe('ApplicantDashboardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApplicantDashboardService]
    });
  });

  it('should be created', inject([ApplicantDashboardService], (service: ApplicantDashboardService) => {
    expect(service).toBeTruthy();
  }));
});
