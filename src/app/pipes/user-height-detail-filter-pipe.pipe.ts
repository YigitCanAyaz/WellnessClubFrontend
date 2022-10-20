import { Pipe, PipeTransform } from '@angular/core';
import { UserHeightDetail } from '../models/details/userHeightDetail';

@Pipe({
  name: 'userHeightDetailFilterPipe'
})
export class UserHeightDetailFilterPipePipe implements PipeTransform {

  transform(value: UserHeightDetail[], filterText: string): UserHeightDetail[] {
    filterText = filterText ? filterText.toLocaleLowerCase() : "";
    return filterText ? value.filter((customerDetail: UserHeightDetail) => customerDetail.lastName.toLocaleLowerCase().indexOf(filterText) !== -1) : value;
  }

}
