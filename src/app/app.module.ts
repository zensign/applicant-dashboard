import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }     from '@angular/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { AppComponent } from './components/app/app.component';
import { AppRoutingModule } from './app.routing.module';
import { ApplicantDashboardService } from './services/applicant-dashboard.service';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DetailsComponent } from './components/details/details.component';
import { TableSortPipe } from './pipes/table-sort.pipe';
import { SortingStatusComponent } from './components/dashboard/sorting-status/sorting-status.component';
import { TableFilterPipe } from './pipes/table-filter.pipe';
import { TableFavoritedPipe } from './pipes/table-favorited.pipe';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { KeysPipe } from './pipes/keys.pipe';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    DetailsComponent,
    TableSortPipe,
    SortingStatusComponent,
    TableFilterPipe,
    TableFavoritedPipe,
    NotFoundComponent,
    KeysPipe
  ],
  imports: [
    AngularFontAwesomeModule,
    AppRoutingModule,
    BrowserModule,
    HttpModule,
    RouterModule
  ],
  providers: [ApplicantDashboardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
