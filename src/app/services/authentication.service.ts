import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { GoogleAuthProvider } from '@angular/fire/auth';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private loggedIn = new BehaviorSubject<boolean>(false);

  constructor(public auth: AngularFireAuth, private router: Router) {
    this.auth.authState.subscribe((user) => this.loggedIn.next(Boolean(user?.uid)));
  }

  signin(email: string, password: string) {
    return this.auth.signInWithEmailAndPassword(email, password);
  }

  signup(email: string, password: string) {
    return this.auth.createUserWithEmailAndPassword(email, password);
  }
  GoogleSignIn() {
    return this.auth.signInWithPopup(new GoogleAuthProvider).then(res => {
      this.router.navigate(['/home'])
    })
  }

  isLoggedIn(): Observable<boolean> {
    return this.loggedIn.asObservable();
  }

  async logout() {
    this.loggedIn.next(false);
    return this.auth.signOut();
  }
}
