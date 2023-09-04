import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'game-on';
  ngOnInit(): void {
    this.router.navigate([''])
  }
  constructor(private router:Router){}

}
