import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from '../interfaces/heroes.interface';

@Pipe({
  name: 'imagen'
  //IMPURO -> Cada vez que pase por el ciclo de deteccion de cambios (consume mas recursos). TRUE cuando el argumento cambia
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
