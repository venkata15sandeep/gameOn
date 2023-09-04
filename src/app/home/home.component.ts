import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  ngOnInit(): void {
    console.log("home component loaded")
  }
  constructor(private router:Router){}
  loginMethod(){
    this.router.navigate(['/login'])
  }
}
