import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Heroe, Publisher } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [
  ]
})
export class AgregarComponent implements OnInit {

  publishers = [
    {
      id: 'DC Comics',
      desc: 'DC - Comics'
    },
    {
      id: 'Marvel Comics',
      desc: 'Marvel - Comics'
    },
  ]

  heroe: Heroe = {
    superhero: '',
    alter_ego: '',
    first_appearance: '',
    characters: '',
    alt_image: '',
    publisher: Publisher.DCComics,
  }

  constructor(private activatedRoute: ActivatedRoute, private heroesService: HeroesService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => console.log(params));
  }

  guardar() :void {
    if (!this.heroe.superhero || !this.heroe.alter_ego || !this.heroe.first_appearance || !this.heroe.characters) {
      return;
    }
    this.heroesService.insertHero(this.heroe)
    .subscribe(success => {}, failure => {})
  }

}
