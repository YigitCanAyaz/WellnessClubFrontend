import { Pipe, PipeTransform } from '@angular/core';
import { Gallery } from '../models/entities/gallery';

@Pipe({
  name: 'galleryFilterPipe'
})
export class GalleryFilterPipePipe implements PipeTransform {

  transform(value: Gallery[], filterText: string): Gallery[] {
    filterText = filterText ? filterText.toLocaleLowerCase() : "";
    return filterText ? value.filter((gallery: Gallery) => gallery.imageName.toLocaleLowerCase().indexOf(filterText) !== -1) : value;
  }

}
