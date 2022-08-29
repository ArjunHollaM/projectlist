import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  userLoggedIn: boolean = false;
  private authSubscription: Subscription;
  constructor(private auth: AuthenticationService, private router: Router) {}

  ngOnInit(): void {
    // capture the subscription of the Observable - only to clean up during component destruction
    this.authSubscription = this.auth.isLoggedIn().subscribe((loggedIn) => (this.userLoggedIn = loggedIn));
  }

  ngOnDestroy(): void {
    // NOTE: cannot leave any subscribed observable as it is without unsubscribing during the end of the lifecycle of the component
    // to avoid memory leaks
    if (this.authSubscription) {
      this.authSubscription.unsubscribe();
    }
  }

  toggleLogin(): void {
    if (this.userLoggedIn) {
      console.log('[HeaderComponent] calling logout!', this.userLoggedIn);
      this.auth.logout();
    }
    this.router.navigate(['/login']);
  }
}
