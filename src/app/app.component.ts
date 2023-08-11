import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HEROES } from './mock-heroes';


@Component({
  standalone:true,
  selector: 'app-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports:[HeroesComponent,CommonModule,HeroDetailComponent],
  
})
export class AppComponent implements OnInit {
  /* username:string="Prathamesh";
  mobile:string='7058013272';
  age:number=19;
  avatar:string='https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8fDA%3D&w=1000&q=80'*/
  title = 'Tour of Heroes';
  // heroes=HEROES;

  
  constructor() { }

  ngOnInit() {
  }
}