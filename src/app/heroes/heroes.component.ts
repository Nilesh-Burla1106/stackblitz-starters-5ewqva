import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Hero } from '../hero';
import {HEROES} from '../mock-heroes';
@Component({
  standalone:true,
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
  imports:[CommonModule,FormsModule]
})
export class HeroesComponent implements OnInit {
  // hero: Hero = {
  //   id: 1,
  //   name: 'Nilesh'
  // };
  // heroes=HEROES;
  // @Input() hero!:Hero;
  // even:boolean=false;
  heroes : HEROES;
  constructor() { }
// geteven(){
//   return this.hero.id%2!=0
onselect(hero:Hero){}

  ngOnInit() {
  }
}
