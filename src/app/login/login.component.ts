import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  submitted:boolean = false
  loginForm = this.fb.group({
    userName : ['',[Validators.required,Validators.minLength(3)]],
    password : ['',[Validators.required,Validators.minLength(3)]]
  })
  ngOnInit(): void {
    
  }
  constructor(private fb : FormBuilder, private router : Router){}
  get lf(){
    return this.loginForm.controls;
  }
  loginSubmit(){
    this.submitted = true
    if(this.submitted && this.loginForm.invalid){
      console.log("form is invalid")
      return
    }else{
      this.router.navigate(['/dashboard'])
    }
  }
}
