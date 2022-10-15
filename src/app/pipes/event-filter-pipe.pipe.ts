import { Pipe, PipeTransform } from '@angular/core';
import { Event } from '../models/entities/event';

@Pipe({
  name: 'eventFilterPipe'
})
export class EventFilterPipePipe implements PipeTransform {

  transform(value: Event[], filterText: string): Event[] {
    filterText = filterText ? filterText.toLocaleLowerCase() : "";
    return filterText ? value.filter((event: Event) => event.title.toLocaleLowerCase().indexOf(filterText) !== -1) : value;
  }

}
