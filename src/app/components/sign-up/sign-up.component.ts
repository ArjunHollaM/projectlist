import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
import { AuthenticationService } from './../../services/authentication.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent implements OnInit {
  signUpForm!: FormGroup;
  isSignedIn = this.authService.isLoggedIn;
  constructor(private fb: FormBuilder, public authService: AuthenticationService, private router: Router) {}

  ngOnInit(): void {
    this.signUpForm = this.fb.group({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      rePassword: new FormControl('', Validators.required),
    });
  }

  signUp(): void {
    if (this.signUpForm.valid) {
      const newUser = this.signUpForm.value;
      console.log('[SignUpComponent] signUp(): newUser =', newUser);
      if (newUser.email && newUser.password === newUser.rePassword) {
        this.authService.signup(newUser.email, newUser.password).then(() => {
          this.router.navigate(['/home']);
        });
      }
    }
  }
}
