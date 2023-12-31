import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { SharedService } from '../shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  
  constructor(private fb : FormBuilder, private sharedService: SharedService, private router: Router){}

  passwordMissMatch: boolean = true;
  submitted: boolean = false 
  registrationForm=this.fb.group({
    firstName: ['',[Validators.required]],
    lastName: ['',[Validators.required]],
    dob: ['',[Validators.required]],
    email: ['',[Validators.required]],
    password: ['',[Validators.required]],
    confirmPassword: ['',[Validators.required]],
  })
  
  get rf(){
    return this.registrationForm.controls;
  }

  passwordComparision(value: any){
    this.rf.password.value == this.rf.confirmPassword.value? this.passwordMissMatch = true : this.passwordMissMatch = false;
  }

  registarationSubmit(){
    this.submitted = true
    if(this.registrationForm.invalid){
      console.log("form is invalid")
      return
    }else if(this.rf.password.value!=this.rf.confirmPassword.value){
      alert("password and confirm password didn't match")
      return
    }else{
      console.log('prepare JSON')
      const inputJson={
        firstName: this.rf.firstName.value,
        lastName: this.rf.lastName.value,
        dob: this.rf.dob.value,
        email: this.rf.email.value,
        password: this.rf.password.value
      }
      this.router.navigate(['/login'])
    }
  }
}
