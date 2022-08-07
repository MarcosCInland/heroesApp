import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from '../interfaces/heroes.interface';

@Pipe({
  name: 'imagen'
})
export class ImagenPipe implements PipeTransform {

   

  transform(value: Heroe): string {
    if (!value.id && !value.alt_image) {
      return './../../../../../assets/no-image.png';
    } else if (value.alt_image) {
      return value.alt_image;
    }
    return `./../../../../../assets/heroes/${value.id}.jpg`;
  }

}
