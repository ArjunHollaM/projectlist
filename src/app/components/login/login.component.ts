import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { HotToastService } from '@ngneat/hot-toast';
import { Router } from '@angular/router';
import { AuthenticationService } from './../../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  registerForm: FormGroup;
  loginError: string = '';
  constructor(private fb: FormBuilder, public authService: AuthenticationService, private router: Router) {}

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
  }
  login() {
    console.log('trying to login');
    if (!this.registerForm.valid) {
      this.loginError = 'Invalid email / password';
      this.resetErrorMessage();
      return;
    }
    this.authService
      .signin(this.registerForm.value.email, this.registerForm.value.password)
      .then(() => {
        this.router.navigate(['/home']);
      })
      .catch((error) => {
        console.log('[LoginFormComponent]: login() -', error);
        this.loginError = error;
        this.resetErrorMessage();
      });
  }

  resetErrorMessage(): void {
    setTimeout(() => {
      this.loginError = '';
    }, 3000);
  }
}
