import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { HotToastService } from '@ngneat/hot-toast';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  registerForm : FormGroup;
  constructor(
    private fb: FormBuilder,
    public firebaseService: AuthenticationService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      email : new FormControl(''),
      password : new FormControl('')
    });
  }
  login() {
    console.log('trying to login');
    this.firebaseService
      .signin(this.registerForm.value.email, this.registerForm.value.password)
      .then(() => {
        this.router.navigate(['/home']);
      })
      .catch((error) => {
        console.log('[LoginFormComponent]: login() -', error);
      });
  }
  
}
