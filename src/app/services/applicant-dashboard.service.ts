import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';

import { ApplicantDashboardState, ApplicantList } from '../models/applicant-dashboard-state.model';

@Injectable()
export class ApplicantDashboardService {

  public GET_APPLICANT_LIST_URL = 'https://zensign.github.io/applicant-dashboard/assets/data/applicants.json';

  private _applicantDashboardSubject: BehaviorSubject<ApplicantDashboardState> = new BehaviorSubject(new ApplicantDashboardState());

  constructor ( private httpClient: HttpClient ) { }

  get _applicantDashboardState (): any {
      return this._applicantDashboardSubject.getValue();
  }

  set _applicantDashboardState (update: any) {
    const next = Object.assign(
      new ApplicantDashboardState(),
      this._applicantDashboardState,
      update
    );
    this._applicantDashboardSubject.next(next);
  }

  get applicantDashboardUpdates (): Observable <any> {
    return this._applicantDashboardSubject
      .asObservable();
  }

  getApplicantsList (force: boolean = false): Observable <any> {
    if (!force && this._applicantDashboardState.applicantList) {
      return Observable.of(this._applicantDashboardState);
    }

    const favs: Array <string> = this.getFavoriteIds();

    this._applicantDashboardState = { loading: true };

    return this.httpClient.get(this.GET_APPLICANT_LIST_URL)
      .map(applicantsList => {
        this._applicantDashboardState = {
          loading: false,
          applicantList: new ApplicantList(applicantsList, favs)
        };
      })
      .catch(response => {
        return Observable.of(response);
      });
  }

  toggleFavorite (id: string) {
    const favs: Array<string> = this.getFavoriteIds();
    const on: boolean = favs.includes(id.toString());
    const index: number = favs.indexOf(id);

    if (on) {
      if (index !== -1) {
          favs.splice(index, 1);
      }
    } else {
      favs.push(id.toString());
    }

    this._applicantDashboardState
      .applicantList
        .applicants
          .forEach(applicant => {
            if (applicant.id.toString() === id) {
              applicant.favorited = !on;
            }
        });

    this._applicantDashboardState = {
        applicantList: this._applicantDashboardState.applicantList
    };

    localStorage.setItem('favorites', favs.join(','));
  }

  getFavoriteIds (): Array <string> {
    const stored: string = localStorage.getItem('favorites');
    const favs: Array<string> = stored ? stored.split(',') : [];
    return favs;
  }
}
