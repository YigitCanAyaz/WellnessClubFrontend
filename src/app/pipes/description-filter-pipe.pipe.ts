import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'descriptionFilterPipe'
})
export class DescriptionFilterPipePipe implements PipeTransform {


  transform(value: string): string {
    return value.substring(0, 20) + "...";
  }

}
