import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Heroe, Publisher } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [`
    img {
      width: 100%;
      border-radius: 5px;
    }
  `]
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

    if (!this.router.url.includes('editar')) {
      return;
    }
    this.activatedRoute.params
      .pipe( switchMap( ({id}) => this.heroesService.getHeroeById(id) ) )
      .subscribe( success => { this.heroe = success }, failure => {  } )
  }

  guardar() :void {
    if (!this.heroe.superhero || !this.heroe.alter_ego || !this.heroe.first_appearance || !this.heroe.characters) {
      return;
    }
    //UPDATE
    this.heroe.id ? this.heroesService.editHero(this.heroe)
    .subscribe(success => { console.log('Actualizando') }, failure => {})
    : 
    //CREATE
    this.heroesService.insertHero(this.heroe)
    .subscribe(success => { this.router.navigate(['/heroes/listado']) }, failure => {})
  }

  eliminar() : void {
    //DELETE
    this.heroesService.deleteHero(this.heroe.id!)
    .subscribe(success => { this.router.navigate(['heroes/listado']) }, failure => {})
  }

}
