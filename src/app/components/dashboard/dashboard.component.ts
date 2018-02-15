import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/first';

import { ApplicantDashboardService } from '../../services/applicant-dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

	public model: Observable<any>;
  public sortProp: string = 'name';
  public sortOrder: string = 'asc';
  public filterText: string = null;
  public showFavorited: boolean = false;

  constructor(private applicantDashboardService: ApplicantDashboardService) { }

  ngOnInit() {
  	this.model = this.applicantDashboardService.applicantDashboardUpdates;
    this.applicantDashboardService.getApplicantsList().first().subscribe();
  }

  updateSorting(property:string)
  {
    if(this.sortProp === property) {
      this.sortOrder = this.sortOrder === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortOrder = 'asc';
    }

    this.sortProp = property;
  }
}
