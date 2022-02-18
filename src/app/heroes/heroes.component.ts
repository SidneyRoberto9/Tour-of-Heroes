import { Component, OnInit } from '@angular/core';
import { Hero } from '../Models/hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss'],
})
export class HeroesComponent implements OnInit {
  // ...
  hero: Hero = {
    id: 1,
    name: 'Eye of the Storm',
  };

  constructor() {}

  ngOnInit(): void {}
}
