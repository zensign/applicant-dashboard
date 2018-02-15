import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tableSort'
})
export class TableSortPipe implements PipeTransform {

  transform (array: any, args?: any): any {
    if (!array || !args || !args.name || !args.order) {
      return array;
    }

    const mod: number = args.order === 'asc' ? 1 : -1;

    array.sort((a: any, b: any) => {
      if (a[args.name] < b[args.name]) {
        return -1 * mod;
      } else if (a[args.name] > b[args.name]) {
        return 1 * mod;
      } else {
        return 0;
      }
    });
    return array;
  }

}
