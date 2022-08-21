import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public auth: AuthenticationService, private router: Router) { }

  ngOnInit(): void {
  }
  toggleLogin(): void {
    console.log('[HeaderComponent] toggleLogin() - isLoggedIn:',this.auth.isLoggedIn);
    if (this.auth.isLoggedIn) {
      this.auth.logout().then(()=>{
        this.router.navigate(['/login']);
      });
    } else {
      this.router.navigate(['/login']);
    }
  }
}
