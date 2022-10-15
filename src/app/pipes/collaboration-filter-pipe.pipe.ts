import { Pipe, PipeTransform } from '@angular/core';
import { Collaboration } from '../models/entities/collaboration';

@Pipe({
  name: 'collaborationFilterPipe'
})
export class CollaborationFilterPipePipe implements PipeTransform {

  transform(value: Collaboration[], filterText: string): Collaboration[] {
    filterText = filterText ? filterText.toLocaleLowerCase() : "";
    return filterText ? value.filter((collaboration: Collaboration) => collaboration.title.toLocaleLowerCase().indexOf(filterText) !== -1) : value;
  }

}
