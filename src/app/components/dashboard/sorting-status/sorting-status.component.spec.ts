import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SortingStatusComponent } from './sorting-status.component';

describe('SortingStatusComponent', () => {
  let component: SortingStatusComponent;
  let fixture: ComponentFixture<SortingStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SortingStatusComponent ]
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
