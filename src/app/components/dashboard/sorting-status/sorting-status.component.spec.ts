import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SortingStatusComponent } from './sorting-status.component';

import { FontAwesomeMock,
  AppSortMock,
  TableSortMock,
  TableFilterMock,
  TableFavoritedMock,
  applicantDashboardServiceMock } from '../../../../test-mocks';

describe('SortingStatusComponent', () => {
  let component: SortingStatusComponent;
  let fixture: ComponentFixture<SortingStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SortingStatusComponent, FontAwesomeMock ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SortingStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
