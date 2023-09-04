import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() { }
  loginStatus: boolean = false

  getloginStatus(){
    return this.loginStatus;
  }

  setloginStatus(status:boolean){
    this.loginStatus=status;
  }
}
