import { Component, OnInit } from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Heroe } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styles: [
  ]
})
export class BuscarComponent implements OnInit {

  termino: string = '';
  heroes: Heroe[] = [];
  heroeSelected!: Heroe;
  zeroResults: boolean = false;

  constructor(private heroesService: HeroesService) { }

  ngOnInit(): void {
  }

  buscando():void{
    this.heroesService.getHeroeByWord(this.termino, 5)
    .subscribe(
      success => {
        if (success.length > 0) {
          this.heroes = success;
          this.zeroResults = false;
        } else {
          this.heroes = [];
          this.zeroResults = true;
        }
        //success.length > 0 ? this.heroes = success : this.heroes = [];
        
      }, failure =>{
        this.termino = 'No se encontro ningun heroe de acuerdo a la busqueda'
      }
    );
  }

  opcionSeleccionada(event: MatAutocompleteSelectedEvent): void {
    if (event.option.value) {
      const heroe: Heroe = event.option.value;
      this.termino = heroe.superhero;

      this.heroesService.getHeroeById(heroe.id!)
      .subscribe(success => { this.heroeSelected = success}, failure => {})
    }
  }

}
