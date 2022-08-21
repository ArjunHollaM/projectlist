import { Injectable } from '@angular/core';
import { Auth, authState, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from '@angular/fire/auth';
import { from, switchMap } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  isLoggedIn = false;
  constructor(public auth: AngularFireAuth) {}
   signin(email: string, password: string) {
    return this.auth.signInWithEmailAndPassword(email, password).then((res) => {
      this.isLoggedIn = true;
    });
  }

  async signup(email: string, password: string) {
    await this.auth
      .createUserWithEmailAndPassword(email, password)
      .then((res) => {
        this.isLoggedIn = true;
      });
  }
  logout() {
    this.isLoggedIn = false;
    return this.auth.signOut();
    
  }
  
}
