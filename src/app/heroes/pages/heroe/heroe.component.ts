import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';

import { HeroesService } from '../../services/heroes.service';
import { Heroe } from '../../interfaces/heroes.interface';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: [`
    img {
      width: 100%;
      border-radius: 0.5rem;
    }
  `]
})
export class HeroeComponent implements OnInit {

  hero!: Heroe;

  constructor(private activatedRoute: ActivatedRoute, private heroesService: HeroesService) { }

  ngOnInit(): void {
    this.activatedRoute.params
    .pipe(
      switchMap(( { id } ) => this.heroesService.getHeroeById(id))
    ).subscribe(success => {this.hero = success}, error => {})
  }

}
