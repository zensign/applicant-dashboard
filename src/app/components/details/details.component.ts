import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/first';

import { ApplicantDashboardService } from '../../services/applicant-dashboard.service';
import { Applicant } from '../../models/applicant-dashboard-state.model';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  public model: Observable<any>;
  public applicantId: number;
  public currentDetail: Applicant = null;

  constructor (private route: ActivatedRoute,
    private applicantDashboardService: ApplicantDashboardService) { }

  ngOnInit () {
    this.route.params
      .subscribe( params => {
        this.applicantId = parseInt(params.id, 10);
        this.model =
          this.applicantDashboardService.
            applicantDashboardUpdates
              .map(state => {
                if (state.applicantList) {
                  this.currentDetail = state.applicantList.applicants
                    .filter(applicant => applicant.id === this.applicantId)[0];
                }

                return state;
              });
        this.applicantDashboardService.getApplicantsList().first().subscribe();
    });
  }

  toggleFavorited (id: string) {
    this.applicantDashboardService.toggleFavorite(id);
  }
}
