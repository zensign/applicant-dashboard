import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tableFavorited'
})
export class TableFavoritedPipe implements PipeTransform {

  transform (array: any, args?: any): any {
    if (!array) {
      return [-1];
    }

    if (!args) {
      return array;
    }

    const results = array.filter( item => item['favorited']);

    return results.length ? results : [-1];
  }

}
