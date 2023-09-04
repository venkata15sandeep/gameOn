import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnDestroy {
  constructor(private router: Router,private sharedService: SharedService){}
  goToCategiries(){
    this.router.navigate(['/dashboard/categories'])
  }
  ngOnDestroy(): void {
    this.sharedService.setloginStatus(false)
  }
}
