import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'summary',
})
export class SummaryPipe implements PipeTransform {
  transform(value: String, limit: number) {
    if (!value) return null;

    let actualLimit = limit ? limit : 30;
    return value.substring(0, actualLimit) + '...';
  }
}
