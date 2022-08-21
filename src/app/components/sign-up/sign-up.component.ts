import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
import { AuthenticationService } from 'src/app/services/authentication.service';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  registerForm!: FormGroup;
  isSignedIn=false
  constructor(private fb: FormBuilder,public firebaseService:AuthenticationService) { }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      email: new FormControl(''),
      password: new FormControl('')
    })

  }
  
  async signup(){
   
    await this.firebaseService.signup(this.registerForm.value.email,this.registerForm.value.password)
    if(this.firebaseService.isLoggedIn)
    this.isSignedIn=true
    
  }
}
