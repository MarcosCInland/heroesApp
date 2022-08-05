import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from '../interfaces/heroes.interface';

@Pipe({
  name: 'imagen'
})
export class ImagenPipe implements PipeTransform {

   

  transform(value: Heroe): string {
    //./../../../../assets/heroes/{{heroe.id}}.jpg
    return `./../../../../../assets/heroes/${value.id}.jpg`;
  }

}
