import { Pipe, PipeTransform } from '@angular/core';
import { UserWeightDetail } from '../models/details/userWeightDetail';

@Pipe({
  name: 'userWeightDetailFilterPipe'
})
export class UserWeightDetailFilterPipePipe implements PipeTransform {

  transform(value: UserWeightDetail[], filterText: string): UserWeightDetail[] {
    filterText = filterText ? filterText.toLocaleLowerCase() : "";
    return filterText ? value.filter((customerDetail: UserWeightDetail) => customerDetail.lastName.toLocaleLowerCase().indexOf(filterText) !== -1) : value;
  }

}
