import { TestBed, async, inject } from '@angular/core/testing';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { ApplicantDashboardService } from './applicant-dashboard.service';

describe('ApplicantDashboardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApplicantDashboardService],
      imports: [
        HttpClientModule,
        HttpClientTestingModule]
    });
  });

  it('should be created', inject([ApplicantDashboardService], (service: ApplicantDashboardService) => {
    expect(service).toBeTruthy();
  }));
});
