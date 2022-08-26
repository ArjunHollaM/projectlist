import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
// import { AuthenticationService } from 'src/app/services/authentication.service';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  registerForm!: FormGroup;
  isSignedIn=false
  // constructor(private fb: FormBuilder,public firebaseService:AuthenticationService) { }

  ngOnInit(): void {
    

  }
  
  
}
