import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeGreeting'
})
export class TimeGreetingPipe implements PipeTransform {

  transform(date: Date = new Date()): string {
    const hours = date.getHours();
    if (hours < 12) {
      return 'Good morning'
    } else if (hours >= 12 && hours < 17) {
      return 'Good afternoon'
    } return 'Good evening'
  }

}
