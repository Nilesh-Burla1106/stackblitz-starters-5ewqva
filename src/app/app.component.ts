import { Component, OnInit } from '@angular/core';

@Component({
  standalone:true,
  selector: 'app-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
   username:string="Nilesh Burla";
  mobile:string='8308997054';
  age:number=20;
  
  constructor() { }

  ngOnInit() {
  }
}