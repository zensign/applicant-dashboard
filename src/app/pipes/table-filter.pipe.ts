import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tableFilter'
})
export class TableFilterPipe implements PipeTransform {

  transform(array: any, args?: any): any {
  	if (!array) {
  		return [-1];
  	}

  	if (!args || !args.props || !args.filterText) {
  		return array;
  	}

    let results = array.filter( item => {
    	let found = false;

    	args.props.forEach(prop => {
    		if (item[prop] && item[prop].toLowerCase().includes(args.filterText.toLowerCase())) {
    			found = true;
    		}
    	})
      return found;
    });

    return results.length ? results : [-1];

  }
}
