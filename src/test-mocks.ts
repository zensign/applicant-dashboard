import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing'
import { Component, Input, Pipe, PipeTransform } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'fa',
  template: ''
})
export class FontAwesomeMock {
  @Input() name: string;
  @Input() animation: string;
  @Input() size: string;
}

@Component({
  selector: 'app-sorting-status',
  template: ''
})
export class AppSortMock {
  @Input() show: boolean;
  @Input() order: string;
}

@Pipe({name: 'tableSort'})
export class TableSortMock implements PipeTransform {
    transform(value: number): number {
        return value;
    }
}

@Pipe({name: 'tableFilter'})
export class TableFilterMock implements PipeTransform {
    transform(value: number): number {
        return value;
    }
}

@Pipe({name: 'tableFavorited'})
export class TableFavoritedMock implements PipeTransform {
    transform(value: number): number {
        return value;
    }
}


@Pipe({name: 'keys'})
export class KeysMock implements PipeTransform {
    transform(value: number): number {
        return value;
    }
}

export const applicantDashboardServiceMock = {
  getApplicantsList: () => Observable.of({}),
  applicantDashboardUpdates: Observable.of({})
}
