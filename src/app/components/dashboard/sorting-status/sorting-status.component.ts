import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sorting-status',
  templateUrl: './sorting-status.component.html',
  styleUrls: ['./sorting-status.component.scss']
})
export class SortingStatusComponent {

  @Input() show = false;
  @Input() order = 'asc';

  constructor() { }

}
