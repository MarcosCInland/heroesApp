import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
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

  constructor(private activatedRoute: ActivatedRoute, private router: Router ,private heroesService: HeroesService) { }

  ngOnInit(): void {
    this.activatedRoute.params
    .pipe( switchMap( ({id}) => this.heroesService.getHeroeById(id) ) )
    .subscribe( success => { this.heroe = success }, failure => {  } )
  }

  guardar() :void {
    if (!this.heroe.superhero || !this.heroe.alter_ego || !this.heroe.first_appearance || !this.heroe.characters) {
      return;
    }
    //EDIT
    this.heroe.id ? this.heroesService.editHero(this.heroe)
    .subscribe(success => { console.log('Actualizando') }, failure => {})
    : 
    //CREATE
    this.heroesService.insertHero(this.heroe)
    .subscribe(success => { this.router.navigate(['/heroes/editar', this.heroe.id]) }, failure => {})
  }

}
